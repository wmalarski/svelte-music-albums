<script>
	import { page } from '$app/stores';
	import { paths } from '$lib/utils/paths';
	import ProfileDropdown from './ProfileDropdown.svelte';
	import SearchDialog from './SearchDialog/SearchDialog.svelte';
</script>

<header class="navbar bg-base-200 shadow-xl">
	<div class="flex-1">
		<a href={paths.home} class="btn btn-ghost normal-case text-xl"> Svelte Music </a>
		<nav>
			<ul class="menu menu-horizontal">
				<li aria-current={$page.url.pathname === paths.home ? 'page' : undefined}>
					<a href={paths.home}>Home</a>
				</li>
				<li aria-current={$page.url.pathname === paths.reviews ? 'page' : undefined}>
					<a href={paths.reviews}>Reviews</a>
				</li>
			</ul>
		</nav>
	</div>

	<div class="flex-none gap-2">
		<SearchDialog />
		<ProfileDropdown />
	</div>
</header>
