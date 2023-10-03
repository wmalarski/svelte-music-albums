import { paths } from '$lib/utils/paths';
import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import prisma from '../db/client';

export const getDataContext = async (event: ServerLoadEvent) => {
	const session = await event.locals.getSession();
	if (!session || !session.user) {
		throw redirect(307, paths.home);
	}
	return { prisma, session, user: session.user };
};

export type DataContext = Awaited<ReturnType<typeof getDataContext>>;
