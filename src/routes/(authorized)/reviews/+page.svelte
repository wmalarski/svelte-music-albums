<script lang="ts">
	import ReviewsList from '$lib/modules/reviews/ReviewsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Reviews - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<section>
	<ReviewsList reviews={data.reviews} />
</section>
