<script lang="ts">
	import AlbumGrid from '$lib/modules/albums/AlbumGrid.svelte';
	import ReviewsList from '$lib/modules/reviews/ReviewsList.svelte';
	import { formatAlbum } from '$lib/utils/format';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: artist = data.album.artist;
	$: albums = data.albums.map((entry) => ({ ...entry, artist: artist }));
	$: reviews = data.reviews.flatMap((review) => {
    const album = data.albums.find((value) => value.id === review.albumId);
    return album ? [{ ...review,album: { ...album, artist } }] : [];
  });
</script>

<svelte:head>
	<title>{formatAlbum({ album: data.album, artist: data.album.artist })} - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

{#if albums.length > 0}
	<AlbumGrid albums={albums} hasMore={false} title="Other albums" />
{/if}

{#if reviews.length > 0}
	<ReviewsList reviews={reviews} hasMore={false} title="Reviews" />
{/if}