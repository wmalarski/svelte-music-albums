import { getDataContext } from '$lib/server/data/context';
import { createReview } from '$lib/server/data/reviews';
import { formParse } from '$lib/server/utils/formParse';
import { maxValue, minValue, number, object, string } from 'valibot';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const ctx = await getDataContext(event);

		const schema = object({
			albumId: string(),
			rate: number([minValue(0), maxValue(10)]),
			text: string()
		});

		const form = await event.request.formData();
		const result = await formParse({ form, schema });

		const review = await createReview({ ctx, ...result });

		return review;
	}
} satisfies Actions;
