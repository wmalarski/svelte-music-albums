<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Reviews</title>
	<meta name="description" content="Album review list" />
</svelte:head>

<section>
	<pre>{JSON.stringify(data, null, 2)}</pre>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>
</section>
