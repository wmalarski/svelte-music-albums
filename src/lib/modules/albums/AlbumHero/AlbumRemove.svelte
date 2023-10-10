<script lang="ts">
	import AlertDialog from "$lib/components/AlertDialog/AlertDialog.svelte";
	import type { Album, Artist } from "@prisma/client";

	export let album: Album & { artist: Artist };
</script>

<AlertDialog 
  descriptionText="Remove album"
  onConfirm={() => console.log("onConfirm", album)}
  titleText="Remove"
  triggerText="Remove"
/>