<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Reviews</title>
	<meta name="description" content="Album review list" />
</svelte:head>

<section>
	<pre>{JSON.stringify(data, null, 2)}</pre>
</section>
