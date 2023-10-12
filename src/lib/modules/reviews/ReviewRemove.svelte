<script lang="ts">
	import AlertDialog from "$lib/components/AlertDialog/AlertDialog.svelte";
	import type { FindReviewsResultItem } from "$lib/server/data/reviews";

	export let review: FindReviewsResultItem;
</script>

<AlertDialog 
  descriptionText="Remove review"
  onConfirm={() => console.log("onConfirm", review)}
  titleText="Remove"
  triggerText="Remove"
/>