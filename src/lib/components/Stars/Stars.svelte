<script lang="ts">
  import stars from '$lib/images/stars.png';
	import starsFilled from '$lib/images/stars-filled.png';

	export let rating: number;
  $: value = Math.round((rating || 0) * 10) / 10;
</script>

<div class="relative flex flex-row items-center gap-2 transition-scale transition-transform hover:translate-x-2 hover:scale-110 duration-300 ease-in-out">
  <img src={stars} class="h-3 w-20" alt="rating" />
  <img
    src={starsFilled}
    class="absolute h-3 w-20"
    alt="rating"
    style={`clip-path: inset(0px ${100 - value * 10}% 0px 0px);`}
  />
  <div class="text-sm opacity-80">{value}</div>
</div>