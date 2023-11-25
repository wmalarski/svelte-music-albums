<script lang="ts">
	import type { FindAlbumsResultItem, FindRandomResultItem } from "$lib/server/data/albums";
	import { onDestroy } from "svelte";
	import AlbumGridItem from './AlbumGridItem.svelte';
	import { createEventDispatcher } from 'svelte';
	
	export let threshold = 0;
	export let horizontal = false;
	export let albums: (FindAlbumsResultItem | FindRandomResultItem)[];
	export let hasMore: boolean;
	
	const dispatch = createEventDispatcher();

	let component: HTMLUListElement | undefined;
	let isLoadMore: boolean = false;

	const onScroll = (event: Event) => {
		const element = event.target as HTMLDivElement;

		const offset = horizontal
			? element.scrollWidth - element.clientWidth - element.scrollLeft
			: element.scrollHeight - element.clientHeight - element.scrollTop;

		console.log("onScroll")

		if (offset <= threshold) {
			if (!isLoadMore && hasMore) {
				dispatch("loadMore");
			}
			isLoadMore = true;
		} else {
			isLoadMore = false;
		}
	}

	$: {
		if (component) {
			component.addEventListener("scroll", onScroll);
			component.addEventListener("resize", onScroll);
		}
	}
	
	onDestroy(() => {
		if (component) {
			component.removeEventListener("scroll", onScroll);
			component.removeEventListener("resize", onScroll);
		}
	});

</script>

<ul bind:this={component} class="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 p-8">
	{#each albums as album}
		<AlbumGridItem album={album} />
	{/each}
</ul>

