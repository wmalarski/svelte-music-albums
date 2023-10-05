<script lang="ts">
	import type { Album, Artist } from "@prisma/client";
	import AlbumDetails from "./AlbumDetails.svelte";
	import AlbumNavigation from "./AlbumNavigation.svelte";

	export let album: Album & { artist: Artist };
</script>

<div class="flex flex-col justify-center">
  <AlbumDetails album={album} />
  <AlbumNavigation album={album} />
</div>