<script>
	import { LOCALES, locale, setLocale, t } from '$lib/stores/i18n.js';
</script>

<div
	role="group"
	aria-label={$t('nav.language')}
	class="border-line dark:border-seam flex items-center rounded-md border p-0.5"
>
	{#each LOCALES as code (code)}
		<button
			type="button"
			onclick={() => setLocale(code)}
			aria-pressed={$locale === code}
			class="rounded px-2 py-1 text-xs leading-none font-medium tracking-wide transition-colors
				{$locale === code
				? 'bg-ink text-paper dark:bg-chalk dark:text-void'
				: 'text-graphite hover:text-ink dark:text-ash dark:hover:text-chalk'}"
		>
			{code === 'en' ? 'EN' : 'ES'}
		</button>
	{/each}
</div>
