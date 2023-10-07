<script lang="ts">
	import { paths } from "$lib/utils/paths";

	export let albumId: string;
</script>

<form method="POST" action={paths.albumReview(albumId)}>
  <input name="id" type="hidden" value={albumId}/>
	<label>
		Text
		<input name="text" type="text">
	</label>
	<label>
		Rate
		<input name="rate" type="number">
	</label>
	<button>Save</button>
</form>