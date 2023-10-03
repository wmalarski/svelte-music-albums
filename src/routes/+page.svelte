<script lang="ts">
	import SignIn from '$lib/modules/auth/SignIn.svelte';
	import { paths } from '$lib/utils/paths';
</script>

<svelte:head>
	<title>Sign In</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<main class="mx-auto flex flex-col items-center p-4">
	<h1 class="max-6-xs my-16 flex items-center text-center text-4xl font-thin uppercase sm:text-6xl">
		Svelte Music Albums
	</h1>
	<SignIn />
	<div class="p-4">
		<a class="link text-xs" href={paths.repository}>
			Made by wmalarski
		</a>
	</div>
</main>
