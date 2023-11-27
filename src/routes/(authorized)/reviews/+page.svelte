<script lang="ts">
	import ReviewsList from '$lib/modules/reviews/ReviewsList.svelte';
	import { buildSearchParams } from '$lib/utils/searchParams';
	import type { PageData } from './$types';

	export let data: PageData;
	
	let reviews = data.reviews;
	let page = 0;

	const onLoadMore = async () => {
		const nextPage = page + 1;
		const search = buildSearchParams({ page: nextPage });
		const response = await fetch(`/api/reviews?${search}`);
		const newData = await response.json();

		reviews = [...reviews,...newData.reviews];
		page = nextPage;
	};
</script>

<svelte:head>
	<title>Reviews - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<ReviewsList reviews={data.reviews} on:loadMore={onLoadMore} hasMore={reviews.length < data.count} shouldScroll />
