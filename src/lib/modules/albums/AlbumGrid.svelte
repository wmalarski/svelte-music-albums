<script lang="ts">
	import type { FindAlbumsResultItem, FindRandomResultItem } from "$lib/server/data/albums";
	import AlbumGridItem from './AlbumGridItem.svelte';
	import { createEventDispatcher } from 'svelte';
	
	export let threshold = 0;
	export let horizontal = false;
	export let albums: (FindAlbumsResultItem | FindRandomResultItem)[];
	export let hasMore: boolean;
	export let title: string | null = null;
	
	const dispatch = createEventDispatcher();

	let isLoadMore: boolean = false;

	const onScroll = (event: Event) => {
		const element = event.target as HTMLDivElement;

		const offset = horizontal
			? element.scrollWidth - element.clientWidth - element.scrollLeft
			: element.scrollHeight - element.clientHeight - element.scrollTop;

		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch("loadMore");
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	}

</script>

<section class="overflow-y-scroll max-h-full flex flex-col gap-4" on:scroll={onScroll} on:resize={onScroll}>
	{#if title}
		<h2 class="py-4 px-8 text-2xl">{title}</h2>
	{/if}
	<ul class="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 p-8">
		{#each albums as album}
		<AlbumGridItem album={album} />
		{/each}
	</ul>
</section>

