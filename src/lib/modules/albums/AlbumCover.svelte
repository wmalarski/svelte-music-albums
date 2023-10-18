<script lang="ts">
	import type { Album, Artist } from '@prisma/client';
	import { formatAlbum } from '$lib/utils/format';
	import { getCoversAttributes } from '$lib/utils/images';
  import type { VariantProps } from "class-variance-authority";
	import { twCva, twCx } from '$lib/utils/twCva';

  const styles = twCva("aspect-square bg-base-200 border-4 border-base-300", {
    variants: {
      size: {
        small: "w-32 h-32 ",
        medium: "w-64 h-64",
      },
    },
  });

	export let album: Album & { artist: Artist };
  export let size: VariantProps<typeof styles>["size"] = "medium";
</script>

{#if album.covers}
	<picture>
    <img
      alt={formatAlbum({ album, artist: album.artist })}
      class={styles({size, class: "max-w-full object-cover"})}
      {...getCoversAttributes(JSON.parse(album.covers))}
    />
  </picture>
{:else}
  <div class={styles({ size})} />
{/if}

