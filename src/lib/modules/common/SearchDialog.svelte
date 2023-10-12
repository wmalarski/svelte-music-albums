<script lang="ts">
	import { buttonClass } from '$lib/components/Button';
  import { createDialog, melt } from '@melt-ui/svelte';
  import { Search, X } from 'lucide-svelte';
	import { dialogContentClass, dialogDescriptionClass, dialogOverlayClass, dialogTitleClass, dialogCloseClass } from '$lib/components/Dialog';
	import { formControlClass, textFieldLabelClass, textFieldLabelTextClass, textFieldInputClass } from '$lib/components/TextField';
 
  const {
    elements: {
      trigger,
      overlay,
      content,
      title,
      description,
      close,
      portalled,
    },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });

  let query: string;

  const onChange = (event: Event & { currentTarget: EventTarget & HTMLFormElement }) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query") || '';
    console.log('query', {query})
  }
</script>
 
<button
  use:melt={$trigger}
  class={buttonClass({size: 'sm', variant: 'ghost'})}
>
  Search
  <Search />
</button>
 
<div use:melt={$portalled}>
  {#if $open}
    <div use:melt={$overlay} class={dialogOverlayClass()} />
    <div
      class={dialogContentClass()}
      use:melt={$content}
    >
    <h2 use:melt={$title} class={dialogTitleClass()}>
      Search
    </h2>
    <p use:melt={$description} class={dialogDescriptionClass()}>
      Find album
    </p>

      <form on:change={onChange}>
        <fieldset class={formControlClass()}>
          <label for="query" class={textFieldLabelClass()}>
            <span class={textFieldLabelTextClass()}>Search</span>
          </label>
          <input 
            id="query" 
            name="query" 
            type="text" 
            class={textFieldInputClass({variant: "bordered"})} 
            bind:value={query}
          >
        </fieldset>
      </form>

      <button
        use:melt={$close}
        aria-label="close"
        class={dialogCloseClass({variant: "ghost", shape: 'circle', size: 'sm'})}
      >
        <X class="square-4" />
      </button>
    </div>
  {/if}
</div>