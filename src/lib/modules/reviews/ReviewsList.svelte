<script lang="ts">
	import type { FindReviewsResultItem } from "$lib/server/data/reviews";
	import ReviewsListItem from "./ReviewsListItem.svelte";

	export let reviews: FindReviewsResultItem[];
</script>

<section class="grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] gap-4 p-8">
  {#each reviews as review}
    <ReviewsListItem review={review} />
  {/each}
</section>
