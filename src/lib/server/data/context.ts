import { paths } from '$lib/utils/paths';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import prisma from '../db/client';

export const getDataContext = async (event: RequestEvent) => {
	const session = await event.locals.getSession();
	if (!session || !session.user) {
		throw redirect(307, paths.home);
	}
	return { prisma, session, user: session.user };
};

export type DataContext = Awaited<ReturnType<typeof getDataContext>>;
