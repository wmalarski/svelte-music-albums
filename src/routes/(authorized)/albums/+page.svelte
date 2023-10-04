<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import AlbumGrid from '$lib/modules/albums/AlbumGrid.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
	{/if}
	<AlbumGrid albums={data.albums} />
</section>
