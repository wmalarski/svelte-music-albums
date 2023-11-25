<script>
	import Footer from '$lib/modules/common/Footer.svelte';
	import Header from '$lib/modules/common/Header.svelte';
</script>

<div class="grid overflow-y-hidden h-screen min-h-screen">
	<Header />

	<main class="overflow-y-hidden">
		<slot />
	</main>

	<Footer />
</div>
