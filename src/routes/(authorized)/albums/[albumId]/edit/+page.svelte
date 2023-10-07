<script lang="ts">
	import { page } from '$app/stores';
	import AlbumForm from '$lib/modules/albums/AlbumForm.svelte';
	import { formatAlbum } from '$lib/utils/format';
	import { paths } from '$lib/utils/paths';
	import type { LayoutData } from '../$types';

	export let data: LayoutData;

	$: heading = formatAlbum({ album: data.album, artist: data.album.artist });
</script>

<svelte:head>
	<title>Edit {heading} - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<section class="flex flex-col p-4">
	<h1 class="flex items-center text-center text-4xl uppercase sm:text-6xl">Edit {heading}</h1>
	<AlbumForm albumId={data.album.id} action={paths.albumReview(data.album.id)} />
</section>
