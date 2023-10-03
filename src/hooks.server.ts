import { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_ISSUER } from '$env/static/private';
import Auth0 from '@auth/core/providers/auth0';
import { SvelteKitAuth } from '@auth/sveltekit';

export const handle = SvelteKitAuth({
	providers: [
		Auth0({
			clientId: AUTH0_CLIENT_ID,
			clientSecret: AUTH0_CLIENT_SECRET,
			issuer: AUTH0_ISSUER
		})
	],
	callbacks: {
		session: ({ session, user }) => {
			if (session.user) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const sessionUser = session.user as any;
				sessionUser.id = user?.id;
			}
			return session;
		}
	}
});
