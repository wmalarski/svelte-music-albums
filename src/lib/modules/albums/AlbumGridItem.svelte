<script lang="ts">
	import type { FindAlbumsResultItem, FindRandomResultItem } from "$lib/server/data/albums";
	import { paths } from '$lib/utils/paths';
	import AlbumCover from './AlbumCover.svelte';
	import AlbumLinks from './AlbumLinks.svelte';
	import { formatAlbum } from '$lib/utils/format';
	import Stars from '$lib/components/Stars/Stars.svelte';

	export let album: FindAlbumsResultItem | FindRandomResultItem;
</script>

<div class="w-64">
	<a href={paths.album(album.id)}>
		<div class="transition-scale scale-95 duration-300 ease-in-out hover:scale-100">
			<AlbumCover album={album} />
		</div>
		<span>{formatAlbum({ album, artist: album.artist })}</span>
	</a>
	<a href={paths.albumReview(album.id)}>
		<Stars rating={album.avg} />
	</a>
	<AlbumLinks album={album} />
</div>