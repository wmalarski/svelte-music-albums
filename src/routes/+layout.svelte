<script>
	import Header from '$lib/modules/common/Header.svelte';
	import './styles.css';
</script>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
