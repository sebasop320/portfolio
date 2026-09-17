<script>
	import Icon from '$lib/components/icons/Icon.svelte';
	import LanguageToggle from '$lib/components/ui/LanguageToggle.svelte';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';
	import { t } from '$lib/stores/i18n.js';

	const links = [
		{ href: '#about', key: 'nav.about' },
		{ href: '#projects', key: 'nav.projects' },
		{ href: '#stack', key: 'nav.stack' },
		{ href: '#contact', key: 'nav.contact' }
	];

	let open = $state(false);

	function onKeydown(event) {
		if (event.key === 'Escape') open = false;
	}
</script>

<svelte:window on:keydown={onKeydown} />

<header
	class="bg-paper/85 dark:bg-void/85 border-line dark:border-seam sticky top-0 z-50 border-b backdrop-blur-md"
>
	<div class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
		<a
			href="#top"
			class="font-display text-[1.0625rem] font-semibold tracking-tight"
			onclick={() => (open = false)}
		>
			Sebas Ocampo<span class="text-pine dark:text-mint">.</span>
		</a>

		<nav aria-label="Primary" class="hidden items-center gap-7 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="text-graphite hover:text-ink dark:text-ash dark:hover:text-chalk text-sm transition-colors"
				>
					{$t(link.key)}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<LanguageToggle />
			<ThemeToggle />

			<button
				type="button"
				onclick={() => (open = !open)}
				aria-expanded={open}
				aria-controls="mobile-nav"
				aria-label={open ? $t('nav.closeMenu') : $t('nav.openMenu')}
				class="text-graphite hover:text-ink dark:text-ash dark:hover:text-chalk border-line dark:border-seam grid size-9 place-items-center rounded-md border transition-colors md:hidden"
			>
				<Icon name={open ? 'close' : 'menu'} size={18} />
			</button>
		</div>
	</div>

	{#if open}
		<nav
			id="mobile-nav"
			aria-label="Primary"
			class="border-line dark:border-seam bg-paper dark:bg-void border-t md:hidden"
		>
			<ul class="mx-auto max-w-5xl px-5 py-2 sm:px-8">
				{#each links as link (link.href)}
					<li class="border-line/70 dark:border-seam/70 border-b last:border-0">
						<a
							href={link.href}
							onclick={() => (open = false)}
							class="hover:text-pine dark:hover:text-mint block py-3 text-base transition-colors"
						>
							{$t(link.key)}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
