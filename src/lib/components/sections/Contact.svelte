<script>
	import Icon from '$lib/components/icons/Icon.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { t } from '$lib/stores/i18n.js';

	const channels = [
		{ icon: 'mail', key: 'contact.email', handle: 'sebasop2031@gmai.com', href: 'mailto:sebasop2031@gmail.com' },
		{ icon: 'github', key: 'contact.github', handle: 'sebasop320', href: 'https://github.com/sebasop' },
		//{
		//	icon: 'linkedin',
		//	key: 'contact.linkedin',
		//	handle: 'sebasocampo',
		//	href: 'https://www.linkedin.com/in/sebasocampo'
		//}
	];
</script>

<section id="contact" aria-labelledby="contact-heading" class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
	<SectionHeading id="contact-heading" title={$t('contact.heading')} aside={$t('contact.aside')} />

	<p class="mb-10 max-w-[52ch] text-lg leading-relaxed">{$t('contact.lead')}</p>

	<ul class="grid gap-3 sm:grid-cols-3">
		{#each channels as channel (channel.key)}
			<li>
				<a
					href={channel.href}
					target={channel.href.startsWith('mailto:') ? null : '_blank'}
					rel="noreferrer noopener"
					class="border-line dark:border-seam hover:border-pine dark:hover:border-mint flex items-center gap-3 rounded-lg border px-4 py-4 transition-colors"
				>
					<Icon name={channel.icon} size={18} class="text-pine dark:text-mint shrink-0" />
					<span class="min-w-0">
						<span class="block text-sm font-medium">{$t(channel.key)}</span>
						<span class="text-graphite dark:text-ash block truncate text-sm">{channel.handle}</span>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</section>
