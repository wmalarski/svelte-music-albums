import { deleteAlbum } from '$lib/server/data/albums';
import { getDataContext } from '$lib/server/data/context';
import { formParse } from '$lib/server/utils/formParse';
import { object, string } from 'valibot';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const ctx = await getDataContext(event);

		const schema = object({
			id: string()
		});

		const form = await event.request.formData();
		const result = await formParse({ form, schema });

		const review = await deleteAlbum({ ctx, ...result });

		return review;
	}
} satisfies Actions;
