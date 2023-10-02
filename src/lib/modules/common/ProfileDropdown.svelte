<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { AlignJustify, Check } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import {
		dropdownMenuClass,
		dropdownMenuItemClass,
		dropdownMenuSeparatorClass,
		dropdownMenuTriggerClass
	} from '$lib/components/DropdownMenu';

	const settingsSync = writable(true);
	const hideMeltUI = writable(false);

	const {
		elements: { trigger, menu, item, separator, arrow },
		builders: { createCheckboxItem },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true
	});

	const {
		elements: { checkboxItem }
	} = createCheckboxItem({
		checked: settingsSync
	});

	const {
		elements: { checkboxItem: checkboxItemA }
	} = createCheckboxItem({
		checked: hideMeltUI
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
		<div class={dropdownMenuItemClass()} use:melt={$item}>About Melt UI</div>
		<div class={dropdownMenuItemClass()} use:melt={$item}>Check for Updates...</div>
		<div class={dropdownMenuSeparatorClass()} use:melt={$separator} />
		<div class={dropdownMenuItemClass()} use:melt={$checkboxItem}>
			<div class="check">
				{#if $settingsSync}
					<Check class="square-4" />
				{/if}
			</div>
			Settings Sync is On
		</div>
		<div use:melt={$separator} class={dropdownMenuSeparatorClass()} />

		<div class={dropdownMenuItemClass()} use:melt={$checkboxItemA}>
			<div class="check">
				{#if $hideMeltUI}
					<Check class="square-4" />
				{/if}
			</div>
			Hide Melt UI
		</div>
		<div class={dropdownMenuItemClass()} use:melt={$item} data-disabled>Show All Components</div>
		<div use:melt={$separator} class={dropdownMenuSeparatorClass()} />
		<div class={dropdownMenuItemClass()} use:melt={$item}>Quit Melt UI</div>
		<div use:melt={$arrow} />
	</div>
{/if}

<style lang="postcss">
	.check {
		@apply absolute left-2 top-1/2 text-magnum-500;
		@apply absolute left-0 inline-flex w-6 items-center justify-center;
		translate: 0 calc(-50% + 1px);
	}
</style>
