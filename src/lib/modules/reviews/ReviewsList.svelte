<script lang="ts">
	import type { FindReviewsResultItem } from "$lib/server/data/reviews";
	import { createEventDispatcher } from "svelte";
	import ReviewsListItem from "./ReviewsListItem.svelte";
	import { twCx } from "$lib/utils/twCva";

  export let threshold = 0;
	export let horizontal = false;
	export let reviews: FindReviewsResultItem[];
  export let hasMore: boolean;
  export let title: string | null = null;
  export let shouldScroll: boolean = false;

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

<section class={twCx("flex flex-col gap-4", {"overflow-y-scroll max-h-full": shouldScroll})} on:scroll={onScroll} on:resize={onScroll}>
  {#if title}
    <h2 class="py-4 px-8 text-2xl">{title}</h2>
  {/if}
  <ul class="grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] gap-4 p-8">
    {#each reviews as review}
     <ReviewsListItem review={review} />
    {/each}
  </ul>
</section>
