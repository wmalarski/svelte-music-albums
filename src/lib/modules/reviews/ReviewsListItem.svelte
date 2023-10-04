<script lang="ts">
  import { page } from '$app/stores';
	import { linkClass } from '$lib/components/Link';
	import Stars from "$lib/components/Stars/Stars.svelte";
	import type { FindReviewsResultItem } from "$lib/server/data/reviews";
	import { formatAlbum } from "$lib/utils/format";
	import { paths } from "$lib/utils/paths";
	import AlbumCover from "../albums/AlbumCover.svelte";
	import AlbumLinks from "../albums/AlbumLinks.svelte";

	export let review: FindReviewsResultItem;

  $: heading = formatAlbum({
    album: review.album,
    artist: review.album.artist,
  })
</script>

  <div class="flex flex-row">
    <a href={paths.album(review.album.id)} class="w-64">
      <div class="transition-scale scale-95 duration-300 ease-in-out hover:scale-100">
        <AlbumCover album={review.album} />
      </div>
    </a>
    <div class="flex flex-col">
      <a href={paths.album(review.album.id)} class="w-64">
        {heading}
      </a>
      <Stars rating={review.rate} />
      {#if $page.data.session?.user?.id === review.userId}
          <a class={linkClass()} href={paths.reviewEdit(review.id)}>
            Edit
          </a>
          <!-- <ReviewRemoveForm review={review} /> -->
      {/if}
      <AlbumLinks album={review.album} />
    </div>
  </div>
