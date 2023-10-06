<script lang="ts">
	import { page } from '$app/stores';
	import { formatAlbum } from '$lib/utils/format';
	import type { LayoutData } from '../$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Edit {formatAlbum({ album: data.album, artist: data.album.artist })} - Svelte Music Albums</title>
	<meta name="description" content="Svelte Music Albums" />
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
</section>
