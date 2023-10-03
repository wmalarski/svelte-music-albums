import { findRandom } from '$lib/server/data/albums';
import { getDataContext } from '$lib/server/data/context';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const ctx = await getDataContext(event);
	const albums = await findRandom({ ctx, take: 20 });
	return { albums };
}) satisfies PageServerLoad;
