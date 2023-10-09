<script lang="ts">
	import { buttonClass } from "$lib/components/Button";
	import { formControlClass, textFieldLabelClass, textFieldLabelTextClass, textFieldInputClass } from "$lib/components/TextField";

	export let albumId: string | undefined = undefined;
  export let action: string;
  export let id: string | undefined = undefined;
  export let rate: number | undefined = undefined;
  export let text: string | undefined = undefined;
</script>

<form method="POST" action={action} class="max-w-xl flex flex-col gap-2">
  {#if albumId}
    <input name="albumId" type="hidden" value={albumId}/>
  {/if}
  
  {#if id}
    <input name="id" type="hidden" value={id}/>
  {/if}

  <div class={formControlClass()}>
    <label for="text" class={textFieldLabelClass()}>
      <span class={textFieldLabelTextClass()}>Text</span>
    </label>
    <input id="text" name="text" type="text" class={textFieldInputClass({variant: "bordered"})} bind:value={text}>
  </div>

  <div class={formControlClass()}>
    <label for="rate" class={textFieldLabelClass()}>
      <span class={textFieldLabelTextClass()}>Rate</span>
    </label>
    <input id="rate" name="rate" type="number" min={0} max={10} step={0.1} class={textFieldInputClass({variant: "bordered"})} value={rate}>
  </div>

	<button class={buttonClass()}>Save</button>
</form>