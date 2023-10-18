<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import AlbumGrid from '$lib/modules/albums/AlbumGrid.svelte';

	export let data: PageData;

	let hasMore = false;

	const onLoadMore = () => {
		console.log({ page })
		//
	};
</script>

<svelte:head>
	<title>Albums - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<section class="overflow-y-scroll max-h-full">
	<AlbumGrid albums={data.albums} on:loadMore={onLoadMore} hasMore={hasMore} />
</section>
