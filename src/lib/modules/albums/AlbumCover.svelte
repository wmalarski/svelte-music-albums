<script lang="ts">
	import type { Album, Artist } from '@prisma/client';
	import { formatAlbum } from '$lib/utils/format';
	import { getCoversAttributes } from '$lib/utils/images';

	export let album: Album & { artist: Artist };
</script>

{#if album.covers}
	<picture>
    <img
      alt={formatAlbum({ album, artist: album.artist })}
      class="w-64 max-w-full bg-base-200 border-4 border-base-300 object-cover aspect-square"
      {...getCoversAttributes(JSON.parse(album.covers))}
    />
  </picture>
{:else}
  <div class="w-64 h-64 border-4 border-base-300 bg-base-200" />
{/if}

