<script lang="ts">
	import type { FindAlbumsResultItem, FindRandomResultItem } from "$lib/server/data/albums";
	import AlbumGridItem from './AlbumGridItem.svelte';

	export let albums: (FindAlbumsResultItem | FindRandomResultItem)[];
</script>

<div class="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 p-8">
	{#each albums as album}
		<AlbumGridItem album={album} />
	{/each}
</div>

