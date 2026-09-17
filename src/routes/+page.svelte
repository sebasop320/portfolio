<script>
	import About from '$lib/components/sections/About.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import { locale } from '$lib/stores/i18n.js';

	const meta = {
		en: {
			title: 'Sebas Ocampo — Full-stack developer',
			description:
				'Full-stack developer and software builder. Web applications, native macOS tooling, and self-hosted infrastructure.'
		},
		es: {
			title: 'Sebas Ocampo — Desarrollador full-stack',
			description:
				'Desarrollador full-stack y constructor de software. Aplicaciones web, herramientas nativas para macOS e infraestructura self-hosted.'
		}
	};
</script>

<svelte:head>
	<title>{meta[$locale].title}</title>
	<meta name="description" content={meta[$locale].description} />
</svelte:head>

<Hero />
<About />
<Projects />
<Skills />
<Contact />
