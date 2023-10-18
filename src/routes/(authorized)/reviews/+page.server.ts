import { getDataContext } from '$lib/server/data/context';
import { findReviews } from '$lib/server/data/reviews';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const ctx = await getDataContext(event);

	const result = await findReviews({ ctx, skip: 0, take: 20 });

	return result;
}) satisfies PageServerLoad;
