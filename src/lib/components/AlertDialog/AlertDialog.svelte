<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte';
  import { X } from 'lucide-svelte';
	import { buttonClass } from '../Button';
	import { dialogContentClass, dialogDescriptionClass, dialogOverlayClass, dialogTitleClass } from '../Dialog';
 
  export let triggerText: string;
  export let titleText: string;
  export let descriptionText: string;
  export let saveText: string;
  export let cancelText: string;

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
</script>
 
<button
  use:melt={$trigger}
  class={buttonClass()}
>
  {triggerText}
</button>
 
<div use:melt={$portalled}>
  {#if $open}
    <div use:melt={$overlay} class={dialogOverlayClass()} />
    <div
      class={dialogContentClass()}
      use:melt={$content}
    >
      <h2 use:melt={$title} class={dialogTitleClass()}>
        {titleText}
      </h2>
      <p use:melt={$description} class={dialogDescriptionClass()}>
        {descriptionText}
      </p>
 

      <div class="mt-6 flex justify-end gap-4">
        <button
          use:melt={$close}
          class={buttonClass()}
        >
          {cancelText}
        </button>
        <button
          use:melt={$close}
          class={buttonClass()}
        >
          {saveText}
        </button>
      </div>
      <button
        use:melt={$close}
        aria-label="close"
        class={buttonClass()}
      >
        <X class="square-4" />
      </button>
    </div>
  {/if}
</div>