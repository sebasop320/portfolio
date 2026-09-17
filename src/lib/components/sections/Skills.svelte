<script>
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { skillGroups } from '$lib/data/skills.js';
	import { t } from '$lib/stores/i18n.js';
</script>

<section id="stack" aria-labelledby="stack-heading" class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
	<SectionHeading id="stack-heading" title={$t('skills.heading')} aside={$t('skills.aside')} />

	<div class="space-y-10">
		{#each skillGroups as group (group.id)}
			<div class="grid gap-4 sm:grid-cols-[13rem_1fr] sm:items-baseline">
				<h3 class="text-base font-semibold">{$t(group.label)}</h3>
				<ul class="flex flex-wrap gap-2">
					{#each group.items as item (item)}
						<li
							class="border-line dark:border-seam bg-surface dark:bg-slab rounded-md border px-3 py-1.5 text-sm"
						>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
