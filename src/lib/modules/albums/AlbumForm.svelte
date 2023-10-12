<script lang="ts">
	import { buttonClass } from "$lib/components/Button";
	import { formControlClass, textFieldLabelClass, textFieldLabelTextClass, textFieldInputClass } from "$lib/components/TextField";

	export let albumId: string;
  export let action: string;
</script>

<form method="POST" action={action}>
  <input name="id" type="hidden" value={albumId}/>
  
  <fieldset class={formControlClass()}>
    <label for="title" class={textFieldLabelClass()}>
      <span class={textFieldLabelTextClass()}>Title</span>
    </label>
    <input id="title" name="title" type="text" class={textFieldInputClass()}>
  </fieldset>

  <fieldset class={formControlClass()}>
    <label for="year" class={textFieldLabelClass()}>
      <span class={textFieldLabelTextClass()}>Year</span>
    </label>
    <input id="year" name="year" type="number" class={textFieldInputClass()}>
  </fieldset>

	<button class={buttonClass()}>Save</button>
</form>