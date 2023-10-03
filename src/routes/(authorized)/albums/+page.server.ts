import prisma from '$lib/server/db/client';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	event.locals.getSession();
	const response = await prisma.album.findMany({
		take: 5
	});

	return { albums: response };
}) satisfies PageServerLoad;
