<script lang="ts">
	import type { PageData } from './$types';
	import AlbumGrid from '$lib/modules/albums/AlbumGrid.svelte';

	export let data: PageData;

	let albums = data.albums;

	const onLoadMore = async () => {
		const response = await fetch("/api/albums");
		const newData = await response.json();
		albums = [...albums,...newData.albums];
	};
</script>

<svelte:head>
	<title>Albums - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<AlbumGrid albums={albums} on:loadMore={onLoadMore} hasMore shouldScroll />
