<script lang="ts">
	import type { FindAlbumsResultItem, FindRandomResultItem } from "$lib/server/data/albums";
	import { paths } from '$lib/utils/paths';
	import { formatAlbum } from '$lib/utils/format';
	import Stars from '$lib/components/Stars/Stars.svelte';
	import AlbumCover from "$lib/modules/albums/AlbumCover.svelte";
	import AlbumLinks from "$lib/modules/albums/AlbumLinks.svelte";

	export let album: FindAlbumsResultItem | FindRandomResultItem;
</script>

<div class="flex gap-2">
	<a class="transition-scale scale-95 duration-300 ease-in-out hover:scale-100" href={paths.album(album.id)}>
    <AlbumCover size="small" album={album} />
	</a>
  <div>
    <a href={paths.album(album.id)}>
      {formatAlbum({ album, artist: album.artist })}
    </a>
    <a href={paths.albumReview(album.id)}>
      <Stars rating={album.avg} />
    </a>
    <AlbumLinks album={album} />
  </div>
</div>