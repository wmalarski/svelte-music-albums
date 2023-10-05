<script lang="ts">
	import { page } from '$app/stores';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { signOut } from "@auth/sveltekit/client"
	import { fly } from 'svelte/transition';
	import {
		dropdownMenuClass,
		dropdownMenuItemClass,
		dropdownMenuSeparatorClass,
		dropdownMenuTriggerClass
	} from '$lib/components/DropdownMenu';
	import { paths } from '$lib/utils/paths';
	import { avatarClass, avatarContentClass } from '$lib/components/Avatar';

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
	{#if $page.data.session?.user?.image}
	<span class={avatarClass()}>
		<img src={$page.data.session.user.image} class={avatarContentClass()} alt="Avatar"/>
	</span>
	{:else}
		<span class={avatarClass({placeholder: true })}>
			<span class={avatarContentClass({ placeholder: true })}>
				{$page.data.session?.user.name?.[0]}
			</span>
		</span>
	{/if}
<span class="sr-only">Open Popover</span>
</button>


{#if $open}
	<div class={dropdownMenuClass()} use:melt={$menu} transition:fly={{ duration: 150, y: -10 }}>
		{#if $page.data.session}
			<span class="px-4 py-2">
				<small>Signed in as</small><br />
				<strong>{$page.data.session.user?.name ?? 'User'}</strong>
			</span>
		{/if}

		<div use:melt={$separator} class={dropdownMenuSeparatorClass()} />

		<a href={paths.albums} class={dropdownMenuItemClass()} use:melt={$item}>Albums</a>
		<a href={paths.reviews} class={dropdownMenuItemClass()} use:melt={$item}>Reviews</a>

		<div use:melt={$separator} class={dropdownMenuSeparatorClass()} />

		<button on:click={() => signOut()} class={dropdownMenuItemClass()} use:melt={$item}>Logout</button>
		<div use:melt={$arrow} />
	</div>
{/if}
