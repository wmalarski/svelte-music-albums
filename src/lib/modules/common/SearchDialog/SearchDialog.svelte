<script lang="ts">
	import { buttonClass } from '$lib/components/Button';
  import { createDialog, melt } from '@melt-ui/svelte';
  import { Search, X } from 'lucide-svelte';
	import { dialogContentClass, dialogDescriptionClass, dialogOverlayClass, dialogTitleClass, dialogCloseClass } from '$lib/components/Dialog';
	import { formControlClass, textFieldLabelClass, textFieldLabelTextClass, textFieldInputClass } from '$lib/components/TextField';
	import { string, parseAsync } from 'valibot';
  import type { FindAlbumsResult } from "$lib/server/data/albums";
	import SearchResultItem from './SearchResultItem.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

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

  let query: string = $page.url.searchParams.get("query") || '';
  let result: FindAlbumsResult;

  const onSubmit = async (event: Event & { currentTarget: EventTarget & HTMLFormElement }) => {    
    const formData = new FormData(event.currentTarget);
    const query = await parseAsync(string(), formData.get("query") || '');
    const search = new URLSearchParams();
    search.set("query", query);

    const response = await fetch(`/api/search?${search}`);
    result = await response.json();

    await goto(`?${search}`);
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

      <form on:submit|preventDefault={onSubmit}>
        <fieldset class={formControlClass()}>
          <label for="query" class={textFieldLabelClass()}>
            <span class={textFieldLabelTextClass()}>Search</span>
          </label>
          <input 
            id="query" 
            name="query" 
            type="text" 
            class={textFieldInputClass({variant: "bordered"})} 
            value={query}
          >
        </fieldset>
      </form>

      {#if result}
        <ul class="flex flex-col gap-2 overflow-scroll max-h-80">
          {#each result.albums as album}
            <SearchResultItem album={album} />
          {/each}   
        </ul>
      {/if}       
        
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