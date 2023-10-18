import { findRandom } from '$lib/server/data/albums';
import { getDataContext } from '$lib/server/data/context';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const ctx = await getDataContext(event);

	const result = await findRandom({ ctx, take: 10 });

	return json(result);
};
