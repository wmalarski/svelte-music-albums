<script lang="ts">
	import SignIn from '$lib/modules/auth/SignIn.svelte';
</script>

<svelte:head>
	<title>Sign In</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="flex flex-col min-h-screen">
	<section>
		<SignIn />
	</section>
</main>
