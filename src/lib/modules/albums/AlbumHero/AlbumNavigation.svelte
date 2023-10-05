<script lang="ts">
	import { paths } from '$lib/utils/paths';
  import type { Album, Artist } from "@prisma/client";
	import { linkClass } from "$lib/components/Link";
  import { page } from '$app/stores';  


	export let album: Album & { artist: Artist };;
</script>

<nav class="border-b-2 pb-4 border-base-300">
  <ul class="w-full flex flex-row justify-center gap-8">
    <li>
      <a
        class={linkClass({
          isActive: paths.album(album.id) === $page.url.pathname  ,
          class: "no-underline hover:border-b-2 hover:border-gray-400 text-xl",
        })}
        href={paths.album(album.id)}
      >
        Details
      </a>
    </li>
    <!-- {#if album.userId === session.value.user?.id}
      <li>
        <a
          class={linkClass({
            isActive:
              paths.albumEdit(album.id) ===$page.url.pathname  ,
          })}
          href={paths.albumEdit(album.id)}
        >
          Edit
        </a>
      </li>
      {/if} -->

    <li>
      <a
        class={linkClass({
          isActive: paths.albumReview(album.id) === $page.url.pathname  ,
          class: "no-underline hover:border-b-2 hover:border-gray-400 text-xl",
        })}
        href={paths.albumReview(album.id)}
      >
        Review
      </a>
    </li>
  </ul>
</nav>