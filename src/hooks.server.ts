import { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } from '$env/static/private';
import Auth0 from '@auth/core/providers/auth0';
import { SvelteKitAuth } from '@auth/sveltekit';

export const handle = SvelteKitAuth({
	providers: [
		Auth0({
			clientId: AUTH0_CLIENT_ID,
			clientSecret: AUTH0_CLIENT_SECRET
		})
	]
});
