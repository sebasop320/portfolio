<script>
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { t } from '$lib/stores/i18n.js';

	const areas = ['web', 'native', 'infra'];
</script>

<section id="about" aria-labelledby="about-heading" class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
	<SectionHeading id="about-heading" title={$t('about.heading')} aside={$t('about.aside')} />

	<p class="mb-12 max-w-[58ch] text-lg leading-relaxed">{$t('about.lead')}</p>

	<div class="grid gap-x-10 gap-y-10 sm:grid-cols-3">
		{#each areas as area (area)}
			<div class="border-line dark:border-seam border-t pt-4">
				<h3 class="text-base font-semibold">{$t(`about.${area}.title`)}</h3>
				<p class="text-graphite dark:text-ash mt-2 text-sm leading-relaxed">
					{$t(`about.${area}.body`)}
				</p>
			</div>
		{/each}
	</div>
</section>
