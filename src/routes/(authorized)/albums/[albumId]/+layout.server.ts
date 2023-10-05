import { findAlbum } from '$lib/server/data/albums';
import { getDataContext } from '$lib/server/data/context';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	const ctx = await getDataContext(event);
	const response = await findAlbum({ ctx, id: event.params.albumId });

	if (!response.album) {
		throw error(404, { message: 'Not found' });
	}

	return response;
}) satisfies LayoutServerLoad;
