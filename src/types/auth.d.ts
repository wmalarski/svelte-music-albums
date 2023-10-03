// declare module '@auth-core' {
// 	interface Session {
// 		user?: {
// 			id: string;
// 		} & import('@auth/core').Session['user'];
// 	}
// }

declare module '@auth/core/types' {
	interface Session extends DefaultSession {
		user: DefaultSession['user'] & {
			id: string;
		};
	}
}

export {};
