export const paths = {
	album: (albumId: string) => `/albums/${albumId}`,
	albumReview: (albumId: string) => `/albums/${albumId}/review`,
	albums: '/albums',
	home: '/',
	repository: 'https://github.com/wmalarski/svelte-music-albums',
	review: (reviewId: string) => `/reviews/${reviewId}`,
	reviewEdit: (reviewId: string) => `/reviews/${reviewId}/edit`,
	reviews: '/reviews'
};

export const pathToYt = (title: string, name: string): string => {
	const value = `${title ?? ''} ${name ?? ''}`;
	const params = new URLSearchParams({ search_query: value });
	return `https://www.youtube.com/results?${params}`;
};

export const pathToGoogle = (title: string, name: string): string => {
	const value = `${title ?? ''} ${name ?? ''}`;
	const params = new URLSearchParams({ q: value });
	return `https://www.google.com/search?${params}`;
};

export const pathToBrainz = (uid: string): string => {
	return `https://musicbrainz.org/release/${uid}`;
};
