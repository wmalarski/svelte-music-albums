<script>
	import Footer from '$lib/modules/common/Footer.svelte';
	import Header from '$lib/modules/common/Header.svelte';
	import './styles.css';
</script>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
