<script lang="ts">
	import AlbumHero from '$lib/modules/albums/AlbumHero/AlbumHero.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col max-h-screen overflow-y-scroll">
	{#if data.album.album}
		<AlbumHero album={data.album.album}/>
	{/if}
	<slot />
</div>
