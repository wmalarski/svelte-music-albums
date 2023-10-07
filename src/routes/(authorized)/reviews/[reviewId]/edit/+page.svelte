<script lang="ts">
	import ReviewForm from '$lib/modules/reviews/ReviewForm.svelte';
	import { formatAlbum } from '$lib/utils/format';
	import { paths } from '$lib/utils/paths';
	import type { PageData } from './$types';

	export let data: PageData;

	$: heading = formatAlbum({ album: data.review.album, artist: data.review.album.artist });
</script>

<svelte:head>
	<title>Review</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<section class="flex flex-col p-4">
	<h1 class="flex items-center text-center text-4xl uppercase sm:text-6xl">
		Review {heading}
	</h1>
	<ReviewForm 
		albumId={data.review.albumId} 
		action={paths.reviewEdit(data.review.id)} 
		rate={data.review.rate} 
		text={data.review.text}
	/>
</section>
	