/**
 * Real repositories from github.com/sebasop320.
 * `summary` holds both locales so the card can swap copy without touching
 * the i18n dictionary.
 * category: 'web' | 'desktop' | 'infra'
 */
export const projects = [
	{
		id: 'cybercolts',
		name: 'CyberColts',
		year: '2026',
		category: 'web',
		stack: ['SvelteKit', 'JavaScript', 'CSS'],
		summary: {
			en: 'The public site for CyberColts, FRC Team 10211: team history, sponsors, and how to reach us — rebuilt from scratch in SvelteKit so the team could stop relying on a template.',
			es: 'El sitio público de CyberColts, equipo FRC 10211: historia del equipo, patrocinadores y cómo contactarnos, reconstruido desde cero en SvelteKit para dejar de depender de una plantilla.'
		},
		repo: null,
		demo: 'https://cybercolts.com'
	},
	{
		id: 'portfolio',
		name: 'sebasopdev.com',
		year: '2026',
		category: 'web',
		stack: ['SvelteKit', 'JavaScript', 'CSS'],
		summary: {
			en: 'My personal site, built on SvelteKit and rebuilt whenever the stack underneath it changes. It is the project I keep pushing to most, and the one that doubles as a testbed for whatever I want to learn next.',
			es: 'Mi sitio personal, hecho con SvelteKit y rehecho cada vez que cambia el stack que lo sostiene. Es el proyecto al que más le empujo commits y el que uso de banco de pruebas para lo que quiera aprender.'
		},
		repo: 'https://github.com/sebasop320/portfolio',
		demo: 'https://www.sebasopdev.com'
	},
	{
		id: 'movieinfo',
		name: 'movieInfo',
		year: '2023',
		category: 'web',
		stack: ['SvelteKit', 'Svelte stores', 'OMDb API'],
		summary: {
			en: 'Search any film and get the year, rating, runtime, director, language and plot on one screen. The OMDb response is fanned out into Svelte stores so every part of the page reads from a single source.',
			es: 'Busca cualquier película y obtén año, clasificación, duración, director, idioma y sinopsis en una sola pantalla. La respuesta de OMDb se reparte en stores de Svelte para que toda la página lea de una sola fuente.'
		},
		repo: 'https://github.com/sebasop320/movieInfo',
		demo: 'https://movie.sebasopdev.com'
	},
	{
		id: 'qr-generator',
		name: 'QR generator',
		year: '2025',
		category: 'web',
		stack: ['Python', 'Flask', 'qrcode', 'Pillow'],
		summary: {
			en: 'A Flask app that turns any text or URL into a downloadable QR code. Small on purpose: one route, one template, and a virtualenv you can have running in about a minute.',
			es: 'Una app en Flask que convierte cualquier texto o URL en un código QR descargable. Pequeña a propósito: una ruta, una plantilla y un entorno virtual que corre en menos de un minuto.'
		},
		repo: 'https://github.com/sebasop320/Qr-generator',
		demo: null
	},
	{
		id: 'cat-app',
		name: 'Cat App',
		year: '2024',
		category: 'desktop',
		stack: ['Electron', 'Electron Forge', 'Node.js', 'axios'],
		summary: {
			en: 'A compact desktop app that pulls a random cat from a public REST API and keeps it on screen, with a splash screen and packaged builds through Electron Forge. Version 1.2 is the current release.',
			es: 'Una app de escritorio compacta que trae un gato aleatorio desde una API REST pública y lo mantiene en pantalla, con splash screen y builds empaquetados con Electron Forge. La versión 1.2 es la actual.'
		},
		repo: 'https://github.com/sebasop320/cat_app',
		demo: 'https://sebasop320.github.io/cat_app/'
	},
	{
		id: 'nextcloud',
		name: 'Nextcloud stack',
		year: '2023',
		category: 'infra',
		stack: ['Docker Compose', 'Nextcloud', 'MariaDB', 'Linux'],
		summary: {
			en: 'The Compose file behind my own file sync: Nextcloud and MariaDB as two services, data and database pinned to an external SSD so the containers stay disposable and the storage does not.',
			es: 'El archivo Compose detrás de mi sincronización de archivos: Nextcloud y MariaDB como dos servicios, con los datos y la base de datos anclados a un SSD externo para que los contenedores sean desechables y el almacenamiento no.'
		},
		repo: 'https://github.com/sebasop320/nextcloud',
		demo: null
	},
	{
		id: 'new-year-countdown',
		name: 'New Year countdown',
		year: '2024',
		category: 'infra',
		stack: ['Node.js', 'JavaScript', 'Self-hosted'],
		summary: {
			en: 'A countdown page you run on your own box rather than someone else’s: clone it, npm install, node server.js, and it is live on port 3000 for everyone on the network.',
			es: 'Una cuenta atrás que corres en tu propio servidor y no en el de otro: clonar, npm install, node server.js, y queda en el puerto 3000 para toda la red.'
		},
		repo: 'https://github.com/sebasop320/New-year-countdown',
		demo: null
	}
];

export const categories = ['all', 'web', 'desktop', 'infra'];