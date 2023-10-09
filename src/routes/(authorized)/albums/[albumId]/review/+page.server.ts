import { getDataContext } from '$lib/server/data/context';
import { createReview } from '$lib/server/data/reviews';
import { formParse } from '$lib/server/utils/formParse';
import { paths } from '$lib/utils/paths';
import { redirect } from '@sveltejs/kit';
import { coerce, maxValue, minValue, number, object, string } from 'valibot';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const ctx = await getDataContext(event);

		const schema = object({
			albumId: string(),
			rate: coerce(number([minValue(0), maxValue(10)]), Number),
			text: string()
		});

		const form = await event.request.formData();

		const result = await formParse({ form, schema });

		console.log({ result });

		await createReview({ ctx, ...result });

		throw redirect(303, paths.album(result.albumId));
	}
} satisfies Actions;
