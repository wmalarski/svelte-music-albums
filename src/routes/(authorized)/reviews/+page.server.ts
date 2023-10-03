import prisma from '$lib/server/db/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await prisma.review.findMany({
		take: 5
	});

	return { albums: response };
}) satisfies PageServerLoad;
