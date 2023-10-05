<script lang="ts">
	import AlbumCover from "../AlbumCover.svelte";
	import AlbumLinks from "../AlbumLinks.svelte";
	import type { Album, Artist } from "@prisma/client";

	export let album: Album & { artist: Artist };
</script>

<section class="flex justify-center p-8">
  <div class="flex max-w-5xl flex-row items-center gap-8">
    <div class="hidden flex-grow md:flex">
      <AlbumCover album={album} />
    </div>
    <div class="flex flex-col gap-6">
      <div>
        <h2 class="mb-4 text-3xl">{album.title}</h2>
      </div>
      <div class="grid grid-cols-[max-content_1fr] items-center gap-3 text-sm opacity-80 lg:grid-cols-[max-content_1fr_max-content_1fr]">
        <span>Artist</span>
        <span>{album.artist.name}</span>
        {#if album.year}
          <span>Released</span>
          <span>{album.year}</span>
        {/if}
      </div>
      <AlbumLinks album={album} />
      <!-- {session.value.user?.id === album.userId && <AlbumRemoveForm />} -->
    </div>
  </div>
</section>