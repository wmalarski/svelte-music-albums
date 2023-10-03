<script>
	import { signIn } from '@auth/sveltekit/client';
	import { buttonClass } from "$lib/components/Button";
</script>

<button class={buttonClass({size: "lg"})} on:click={() => signIn('auth0')}>
	Sign In with Auth0
</button>

