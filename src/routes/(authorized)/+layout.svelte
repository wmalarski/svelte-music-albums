<script>
	import Footer from '$lib/modules/common/Footer.svelte';
	import Header from '$lib/modules/common/Header.svelte';
	import { twCx } from '$lib/utils/twCva';
	import styles from './layout.module.css';
</script>

<div class={twCx("grid overflow-y-hidden h-screen min-h-screen", styles.grid)}>
	<Header />

	<main class="overflow-y-hidden">
		<slot />
	</main>

	<Footer />
</div>
