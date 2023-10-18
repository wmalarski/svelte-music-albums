<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import AlbumGrid from '$lib/modules/albums/AlbumGrid.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Albums - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<section>
	<AlbumGrid albums={data.albums} />
</section>
