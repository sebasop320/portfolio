<script>
	import Icon from '$lib/components/icons/Icon.svelte';
	import { t } from '$lib/stores/i18n.js';
	import { theme, toggleTheme } from '$lib/stores/theme.js';

	let isDark = $derived($theme === 'dark');
	let label = $derived(isDark ? $t('nav.theme.toLight') : $t('nav.theme.toDark'));
</script>

<button
	type="button"
	onclick={toggleTheme}
	aria-label={label}
	title={label}
	class="text-graphite hover:text-ink hover:border-pine dark:text-ash dark:hover:text-chalk dark:border-seam dark:hover:border-mint border-line grid size-9 place-items-center rounded-md border transition-colors"
>
	<Icon name={isDark ? 'sun' : 'moon'} size={17} />
</button>
