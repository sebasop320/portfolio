/**
 * One entry per project. `summary` holds both locales so the card can swap
 * copy without touching the i18n dictionary.
 * category: 'web' | 'native' | 'infra'
 */
export const projects = [
	{
		id: 'cadencia',
		name: 'Cadencia',
		year: '2025',
		category: 'web',
		stack: ['SvelteKit', 'Node.js', 'Tailwind CSS', 'Postgres'],
		summary: {
			en: 'A small subscription tracker for freelancers: imports charges from a bank export, flags renewals before they hit, and shows what a year of every tool actually costs. Multi-tenant from day one, billing included.',
			es: 'Un gestor de suscripciones para freelancers: importa cargos desde el extracto del banco, avisa de las renovaciones antes de que lleguen y muestra cuánto cuesta al año cada herramienta. Multi-tenant desde el primer día, con cobros incluidos.'
		},
		repo: 'https://github.com/sebasop/cadencia',
		demo: 'https://cadencia.app'
	},
	{
		id: 'klip',
		name: 'Klip',
		year: '2024',
		category: 'native',
		stack: ['Swift', 'SwiftUI', 'macOS', 'CLI'],
		summary: {
			en: 'A menu bar app for macOS that keeps a searchable clipboard history and lets you pipe any entry straight through a shell script. Ships with a companion CLI so the same actions work over SSH.',
			es: 'Una app de barra de menú para macOS que guarda un historial de portapapeles con búsqueda y permite pasar cualquier entrada por un script de shell. Incluye una CLI para ejecutar las mismas acciones por SSH.'
		},
		repo: 'https://github.com/sebasop/klip',
		demo: null
	},
	{
		id: 'homestack',
		name: 'Homestack',
		year: '2024',
		category: 'infra',
		stack: ['Docker', 'PocketBase', 'Nginx', 'Cloudflare'],
		summary: {
			en: 'The self-hosted stack behind my side projects: one Compose file that stands up PocketBase, an Nginx reverse proxy and a Cloudflare tunnel, with backups and TLS renewal handled by cron rather than by hand.',
			es: 'El stack self-hosted detrás de mis proyectos: un solo archivo Compose que levanta PocketBase, un proxy inverso con Nginx y un túnel de Cloudflare, con copias de seguridad y renovación de TLS a cargo de cron y no de mí.'
		},
		repo: 'https://github.com/sebasop/homestack',
		demo: 'https://status.sebasop.dev'
	}
];

export const categories = ['all', 'web', 'native', 'infra'];
