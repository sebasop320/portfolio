<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import { t } from '$lib/stores/i18n.js';
	import { watchSystemTheme } from '$lib/stores/theme.js';

	let { children } = $props();

	onMount(() => watchSystemTheme());
</script>

<a
	href="#main"
	class="bg-ink text-paper dark:bg-chalk dark:text-void sr-only rounded-md px-4 py-2 text-sm focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60]"
>
	{$t('nav.skip')}
</a>

<Header />

<main id="main">
	{@render children()}
</main>

<Footer />
