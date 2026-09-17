<script>
	let { title, aside = '', id } = $props();
</script>

<div class="border-line dark:border-seam mb-10 flex items-baseline justify-between gap-6 border-b pb-3">
	<h2 {id} class="text-2xl font-semibold tracking-tight sm:text-3xl">
		{title}
	</h2>
	{#if aside}
		<p class="text-graphite dark:text-ash shrink-0 text-sm">{aside}</p>
	{/if}
</div>
