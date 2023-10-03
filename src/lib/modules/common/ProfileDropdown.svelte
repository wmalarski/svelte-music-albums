<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { signOut } from "@auth/sveltekit/client"
	import { AlignJustify } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import {
		dropdownMenuClass,
		dropdownMenuItemClass,
		dropdownMenuSeparatorClass,
		dropdownMenuTriggerClass
	} from '$lib/components/DropdownMenu';
	import { paths } from '$lib/utils/paths';

	const {
		elements: { trigger, menu, item, separator, arrow },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
	});

</script>

<button
	type="button"
	class={dropdownMenuTriggerClass()}
	use:melt={$trigger}
	aria-label="Update dimensions"
>
	<AlignJustify class="square-4" />
	<span class="sr-only">Open Popover</span>
</button>

{#if $open}
	<div class={dropdownMenuClass()} use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		<a href={paths.albums} class={dropdownMenuItemClass()} use:melt={$item}>Albums</a>
		<a href={paths.reviews} class={dropdownMenuItemClass()} use:melt={$item}>Reviews</a>
		<div use:melt={$separator} class={dropdownMenuSeparatorClass()} />
		<button on:click={() => signOut()} class={dropdownMenuItemClass()} use:melt={$item}>Logout</button>
		<div use:melt={$arrow} />
	</div>
{/if}
