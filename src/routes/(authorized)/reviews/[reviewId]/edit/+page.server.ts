import { getDataContext } from '$lib/server/data/context';
import { findReview, updateReview } from '$lib/server/data/reviews';
import { formParse } from '$lib/server/utils/formParse';
import { error } from '@sveltejs/kit';
import { coerce, maxValue, minValue, number, object, optional, string } from 'valibot';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	const ctx = await getDataContext(event);
	const review = await findReview({ ctx, id: event.params.reviewId });

	if (!review) {
		throw error(404, { message: 'Not found' });
	}

	return { review };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const ctx = await getDataContext(event);

		const schema = object({
			id: string(),
			rate: optional(coerce(number([minValue(0), maxValue(10)]), Number)),
			text: optional(string())
		});

		const form = await event.request.formData();
		const result = await formParse({ form, schema });

		const review = await updateReview({ ctx, ...result });

		return review;
	}
} satisfies Actions;
