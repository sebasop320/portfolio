<script>
	/**
	 * Inline icons so the site ships with zero runtime dependencies.
	 * Geometry follows Lucide (ISC). To use the package instead:
	 *   npm i @lucide/svelte
	 *   import { Sun, Moon, Menu, X } from '@lucide/svelte';
	 * and drop this component.
	 */
	let { name, size = 20, stroke = 1.75, class: className = '' } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
	focusable="false"
>
	{#if name === 'sun'}
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2" />
		<path d="M12 20v2" />
		<path d="M4.93 4.93l1.41 1.41" />
		<path d="M17.66 17.66l1.41 1.41" />
		<path d="M2 12h2" />
		<path d="M20 12h2" />
		<path d="M6.34 17.66l-1.41 1.41" />
		<path d="M19.07 4.93l-1.41 1.41" />
	{:else if name === 'moon'}
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	{:else if name === 'menu'}
		<path d="M4 7h16" />
		<path d="M4 12h16" />
		<path d="M4 17h16" />
	{:else if name === 'close'}
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	{:else if name === 'github'}
		<path
			d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
		/>
		<path d="M9 18c-4.51 2-5-2-7-2" />
	{:else if name === 'linkedin'}
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect x="2" y="9" width="4" height="12" rx="1" />
		<circle cx="4" cy="4" r="2" />
	{:else if name === 'mail'}
		<rect x="2" y="4" width="20" height="16" rx="2" />
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
	{:else if name === 'external'}
		<path d="M7 17 17 7" />
		<path d="M7 7h10v10" />
	{:else if name === 'globe'}
		<circle cx="12" cy="12" r="9" />
		<path d="M3 12h18" />
		<path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
	{/if}
</svg>
