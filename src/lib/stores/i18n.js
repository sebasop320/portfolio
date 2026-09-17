import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

const STORAGE_KEY = 'sebasop:lang';

export const LOCALES = ['en', 'es'];

const dictionary = {
	en: {
		nav: {
			about: 'About',
			projects: 'Projects',
			stack: 'Stack',
			contact: 'Contact',
			openMenu: 'Open menu',
			closeMenu: 'Close menu',
			skip: 'Skip to content',
			language: 'Language',
			theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' }
		},
		hero: {
			status: '',
			titleLine1: 'Full-stack developer',
			titleLine2: 'and software builder',
			bio: 'I build web applications end to end, write native tooling for macOS, and run the infrastructure underneath it — containers, reverse proxies and APIs on hardware I maintain myself. I care most about interfaces that stay fast and legible after the demo is over.',
			primary: 'View projects',
			secondary: 'Get in touch'
		},
		about: {
			heading: 'About',
			aside: 'Three kinds of work',
			lead: 'Most of what I ship falls into one of three buckets, and the overlap between them is the point.',
			web: {
				title: 'Product work in the browser',
				body: 'Svelte and React front ends on Node services, built to be shipped by a small team and maintained by one person.'
			},
			native: {
				title: 'Native tools for macOS',
				body: 'Swift utilities and command-line automation that remove the small daily frictions no SaaS product is going to solve.'
			},
			infra: {
				title: 'Infrastructure I own',
				body: 'Self-hosted stacks on Docker behind Nginx and Cloudflare, with PocketBase or Postgres holding the data.'
			}
		},
		projects: {
			heading: 'Projects',
			aside: 'Selected work',
			filterLabel: 'Filter projects by type',
			filters: { all: 'Everything', web: 'Web', native: 'Native', infra: 'Infrastructure' },
			code: 'Source',
			live: 'Live',
			empty: 'Nothing here yet under this filter.'
		},
		skills: {
			heading: 'Stack',
			aside: 'What I reach for',
			languages: 'Languages',
			frontend: 'Frontend',
			backend: 'Backend and infrastructure'
		},
		contact: {
			heading: 'Contact',
			aside: 'Say hello',
			lead: 'Got something to build, or a role you think fits? Email is fastest — I answer within a day or two.',
			email: 'Email',
			github: 'GitHub',
			
		},
		footer: {
			rights: 'All rights reserved.',
			built: 'Built with SvelteKit and Tailwind CSS.'
		}
	},

	es: {
		nav: {
			about: 'Perfil',
			projects: 'Proyectos',
			stack: 'Tecnologías',
			contact: 'Contacto',
			openMenu: 'Abrir menú',
			closeMenu: 'Cerrar menú',
			skip: 'Ir al contenido',
			language: 'Idioma',
			theme: { toDark: 'Cambiar a modo oscuro', toLight: 'Cambiar a modo claro' }
		},
		hero: {
			status: '',
			titleLine1: 'Desarrollador full-stack',
			titleLine2: 'y constructor de software',
			bio: 'Construyo aplicaciones web de punta a punta, escribo herramientas nativas para macOS y administro la infraestructura que las sostiene: contenedores, proxies inversos y APIs en servidores que mantengo yo mismo. Me importan sobre todo las interfaces que siguen siendo rápidas y claras mucho después de la demo.',
			primary: 'Ver proyectos',
			secondary: 'Contacto'
		},
		about: {
			heading: 'Perfil',
			aside: 'Tres tipos de trabajo',
			lead: 'Casi todo lo que publico cae en una de estas tres áreas, y lo interesante está justo donde se cruzan.',
			web: {
				title: 'Producto en el navegador',
				body: 'Interfaces en Svelte y React sobre servicios en Node, pensadas para lanzarse en equipo pequeño y mantenerse con una sola persona.'
			},
			native: {
				title: 'Herramientas nativas para macOS',
				body: 'Utilidades en Swift y automatización por línea de comandos que eliminan las fricciones diarias que ningún SaaS va a resolver.'
			},
			infra: {
				title: 'Infraestructura propia',
				body: 'Stacks self-hosted sobre Docker detrás de Nginx y Cloudflare, con PocketBase o Postgres guardando los datos.'
			}
		},
		projects: {
			heading: 'Proyectos',
			aside: 'Trabajo seleccionado',
			filterLabel: 'Filtrar proyectos por tipo',
			filters: { all: 'Todo', web: 'Web', native: 'Nativo', infra: 'Infraestructura' },
			code: 'Código',
			live: 'En vivo',
			empty: 'Todavía no hay nada con este filtro.'
		},
		skills: {
			heading: 'Tecnologías',
			aside: 'Lo que uso a diario',
			languages: 'Lenguajes',
			frontend: 'Frontend',
			backend: 'Backend e infraestructura'
		},
		contact: {
			heading: 'Contacto',
			aside: 'Escríbeme',
			lead: '¿Tienes algo que construir o una vacante que encaje? El correo es lo más rápido: respondo en uno o dos días.',
			email: 'Correo',
			github: 'GitHub',
			
		},
		footer: {
			rights: 'Todos los derechos reservados.',
			built: 'Hecho con SvelteKit y Tailwind CSS.'
		}
	}
};

function detect() {
	if (!browser) return 'en';
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (LOCALES.includes(stored)) return stored;
	} catch {
		/* storage unavailable */
	}
	return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

/** Current locale: 'en' | 'es' */
export const locale = writable(detect());

locale.subscribe((value) => {
	if (!browser) return;
	document.documentElement.lang = value;
	try {
		localStorage.setItem(STORAGE_KEY, value);
	} catch {
		/* storage unavailable */
	}
});

export function setLocale(next) {
	if (LOCALES.includes(next)) locale.set(next);
}

export function toggleLocale() {
	locale.update((current) => (current === 'en' ? 'es' : 'en'));
}

/** Resolve a dot path such as 'hero.primary' against a dictionary. */
function lookup(tree, path) {
	return path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), tree);
}

/** Usage in a component: {$t('hero.primary')} */
export const t = derived(locale, ($locale) => (path) => {
	const value = lookup(dictionary[$locale], path) ?? lookup(dictionary.en, path);
	return value ?? path;
});
