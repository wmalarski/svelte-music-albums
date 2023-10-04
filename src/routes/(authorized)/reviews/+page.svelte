<script lang="ts">
	import ReviewsList from '$lib/modules/reviews/ReviewsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Reviews</title>
	<meta name="description" content="Album review list" />
</svelte:head>

<section>
	<ReviewsList reviews={data.reviews} />
</section>
