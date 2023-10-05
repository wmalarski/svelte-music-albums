<script lang="ts">
	import AlbumGrid from '$lib/modules/albums/AlbumGrid.svelte';
	import ReviewsList from '$lib/modules/reviews/ReviewsList.svelte';
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
	<title>Album {data.album.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if albums.length > 0}
	<h2 class="py-4 px-8 text-2xl">Other albums</h2>
	<AlbumGrid albums={albums} />
{/if}

{#if reviews.length > 0}
  <div class="flex flex-col gap-4">
    <h2 class="py-4 px-8 text-2xl">Reviews</h2>
    <ReviewsList reviews={reviews} />
  </div>
{/if}