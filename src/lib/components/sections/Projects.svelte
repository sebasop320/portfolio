<script>
	import ProjectCard from '$lib/components/sections/ProjectCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { categories, projects } from '$lib/data/projects.js';
	import { t } from '$lib/stores/i18n.js';

	let active = $state('all');
	let visible = $derived(
		active === 'all' ? projects : projects.filter((project) => project.category === active)
	);
</script>

<section id="projects" aria-labelledby="projects-heading" class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
	<SectionHeading id="projects-heading" title={$t('projects.heading')} aside={$t('projects.aside')} />

	<div role="group" aria-label={$t('projects.filterLabel')} class="mb-8 flex flex-wrap gap-2">
		{#each categories as category (category)}
			<button
				type="button"
				onclick={() => (active = category)}
				aria-pressed={active === category}
				class="rounded-full border px-3.5 py-1.5 text-sm transition-colors
					{active === category
					? 'border-ink bg-ink text-paper dark:border-chalk dark:bg-chalk dark:text-void'
					: 'border-line text-graphite hover:border-pine hover:text-pine dark:border-seam dark:text-ash dark:hover:border-mint dark:hover:text-mint'}"
			>
				{$t(`projects.filters.${category}`)}
			</button>
		{/each}
	</div>

	{#if visible.length}
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each visible as project (project.id)}
				<ProjectCard {project} />
			{/each}
		</div>
	{:else}
		<p class="text-graphite dark:text-ash text-sm">{$t('projects.empty')}</p>
	{/if}
</section>
