<script>
	import Icon from '$lib/components/icons/Icon.svelte';
	import { locale, t } from '$lib/stores/i18n.js';

	let { project } = $props();
</script>

<article
	class="border-line dark:border-seam hover:border-pine dark:hover:border-mint flex h-full flex-col rounded-lg border p-6 transition-colors"
>
	<div class="flex items-baseline justify-between gap-4">
		<h3 class="text-xl font-semibold tracking-tight">{project.name}</h3>
		<span class="text-graphite dark:text-ash text-sm tabular-nums">{project.year}</span>
	</div>

	<p class="text-graphite dark:text-ash mt-3 text-sm leading-relaxed">
		{project.summary[$locale]}
	</p>

	<ul class="mt-5 flex flex-wrap gap-1.5">
		{#each project.stack as item (item)}
			<li
				class="border-line dark:border-seam text-graphite dark:text-ash rounded border px-2 py-0.5 text-xs"
			>
				{item}
			</li>
		{/each}
	</ul>

	<div class="mt-6 flex items-center gap-5 pt-1">
		<a
			href={project.repo}
			target="_blank"
			rel="noreferrer noopener"
			class="hover:text-pine dark:hover:text-mint inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
		>
			<Icon name="github" size={16} />
			{$t('projects.code')}
		</a>

		{#if project.demo}
			<a
				href={project.demo}
				target="_blank"
				rel="noreferrer noopener"
				class="hover:text-pine dark:hover:text-mint inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
			>
				<Icon name="external" size={16} />
				{$t('projects.live')}
			</a>
		{/if}
	</div>
</article>
