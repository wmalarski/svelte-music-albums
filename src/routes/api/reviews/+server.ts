import { getDataContext } from '$lib/server/data/context';
import { findReviews } from '$lib/server/data/reviews';
import { json } from '@sveltejs/kit';
import { coerce, number, object, parseAsync } from 'valibot';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const ctx = await getDataContext(event);

	const schema = object({ page: coerce(number(), Number) });

	const params = Object.fromEntries(event.url.searchParams.entries());
	const parsed = await parseAsync(schema, params);

	const result = await findReviews({ ctx, skip: 10 * parsed.page, take: 10 });

	return json(result);
};
