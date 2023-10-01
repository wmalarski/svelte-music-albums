<script>
	import { page } from '$app/stores';
	import { paths } from '$lib/utils/paths';
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
					<a href={paths.albums}>Reviews</a>
				</li>
			</ul>
		</nav>
	</div>

	<div class="flex-none gap-2">
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
		</div>
	</div>
</header>
