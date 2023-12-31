import { findAlbums } from '$lib/server/data/albums';
import { getDataContext } from '$lib/server/data/context';
import { json } from '@sveltejs/kit';
import { coerce, number, object, optional, parseAsync, string } from 'valibot';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const ctx = await getDataContext(event);

	const schema = object({ query: string(), page: optional(coerce(number(), Number), 0) });

	const params = Object.fromEntries(event.url.searchParams.entries());
	const parsed = await parseAsync(schema, params);

	const result = await findAlbums({
		ctx,
		query: parsed.query,
		skip: parsed.page * 10,
		take: 10
	});

	return json(result);
};
