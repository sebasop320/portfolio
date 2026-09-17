<script>
	import { t } from '$lib/stores/i18n.js';
</script>

<section id="top" class="mx-auto max-w-5xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
	<p class="rise text-graphite dark:text-ash flex items-center gap-2 text-sm">
		<span class="bg-pine dark:bg-mint inline-block size-1.5 rounded-full"></span>
		{$t('hero.status')}
	</p>

	<h1
		class="rise mt-6 max-w-3xl text-[clamp(2.5rem,8.5vw,5.25rem)] leading-[0.95] font-semibold tracking-[-0.03em]"
		style="animation-delay: 90ms"
	>
		{$t('hero.titleLine1')}<br />
		<span class="text-graphite dark:text-ash">{$t('hero.titleLine2')}</span>
	</h1>

	<p
		class="rise text-graphite dark:text-ash mt-8 max-w-[58ch] text-lg leading-relaxed"
		style="animation-delay: 180ms"
	>
		{$t('hero.bio')}
	</p>

	<div class="rise mt-10 flex flex-wrap items-center gap-3" style="animation-delay: 270ms">
		<a
			href="#projects"
			class="bg-ink text-paper hover:bg-pine dark:bg-chalk dark:text-void dark:hover:bg-mint rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
		>
			{$t('hero.primary')}
		</a>
		<a
			href="#contact"
			class="border-line hover:border-pine hover:text-pine dark:border-seam dark:hover:border-mint dark:hover:text-mint rounded-md border px-5 py-2.5 text-sm font-medium transition-colors"
		>
			{$t('hero.secondary')}
		</a>
	</div>
</section>
