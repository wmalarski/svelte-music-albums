<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Review</title>
	<meta name="description" content="Svelte Music Albums" />
</svelte:head>

<section>

	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
	{/if}
</section>
