<script>
	import { t } from '$lib/stores/i18n.js';

	const year = new Date().getFullYear();
</script>

<footer class="border-line dark:border-seam border-t">
	<div
		class="text-graphite dark:text-ash mx-auto flex max-w-5xl flex-col gap-1 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8"
	>
		<p>© {year} Sebas Ocampo. {$t('footer.rights')}</p>
		<p>{$t('footer.built')}</p>
	</div>
</footer>
