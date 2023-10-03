export const paths = {
	home: '/',
	albums: '/albums',
	album: (albumId: string) => `/albums/${albumId}`,
	reviews: '/reviews',
	repository: 'https://github.com/wmalarski/svelte-music-albums'
};
