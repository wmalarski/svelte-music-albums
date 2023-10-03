// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Session as AuthSession } from '@auth/core/types';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Session extends AuthSession {}
	}
}

export {};
