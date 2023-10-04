<script lang="ts">
	import type { Album, Artist } from '@prisma/client';
	import { pathToBrainz, pathToGoogle, pathToYt } from '$lib/utils/paths';
	import { linkClass } from '$lib/components/Link';

	export let album: Album & { artist: Artist };
</script>

<div class="flex gap-2">
  <a
    href={pathToGoogle(album.title, album.artist.name)}
    class={linkClass()}
    target="_none"
  >
    Google
  </a>
  <a
    href={pathToYt(album.title, album.artist.name)}
    class={linkClass()}
    target="_none"
  >
    Youtube
  </a>
  {#if album.sid}
    <a href={pathToBrainz(album.sid)} class={linkClass()} target="_none">
      MusicBrainz
    </a>
  {/if}
</div>