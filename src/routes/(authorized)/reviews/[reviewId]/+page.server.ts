import { getDataContext } from '$lib/server/data/context';
import { deleteReview } from '$lib/server/data/reviews';
import { formParse } from '$lib/server/utils/formParse';
import { object, string } from 'valibot';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const ctx = await getDataContext(event);

		const schema = object({
			id: string()
		});

		const form = await event.request.formData();
		const result = await formParse({ form, schema });

		const review = await deleteReview({ ctx, ...result });

		return review;
	}
} satisfies Actions;
