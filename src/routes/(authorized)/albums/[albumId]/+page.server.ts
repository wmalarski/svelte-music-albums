import { findAlbum } from '$lib/server/data/albums';
import { getDataContext } from '$lib/server/data/context';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const ctx = await getDataContext(event);
	const album = await findAlbum({ ctx, id: event.params.albumId });
	return { album };
}) satisfies PageServerLoad;
