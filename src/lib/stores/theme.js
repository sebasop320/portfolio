import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

const STORAGE_KEY = 'sebasop:theme';

function stored() {
	if (!browser) return null;
	try {
		const value = localStorage.getItem(STORAGE_KEY);
		return value === 'light' || value === 'dark' ? value : null;
	} catch {
		return null;
	}
}

function detect() {
	if (!browser) return 'light';
	return stored() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

/** Current theme: 'light' | 'dark' */
export const theme = writable(detect());

/* Applying the class is a side effect of the value changing, however it changed. */
theme.subscribe((value) => {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', value === 'dark');
	document.documentElement.style.colorScheme = value;
});

/** Explicit choice by the visitor — this is the only thing that writes to storage. */
export function setTheme(next) {
	if (next !== 'light' && next !== 'dark') return;
	theme.set(next);
	if (!browser) return;
	try {
		localStorage.setItem(STORAGE_KEY, next);
	} catch {
		/* storage unavailable */
	}
}

export function toggleTheme() {
	setTheme(get(theme) === 'dark' ? 'light' : 'dark');
}

/**
 * Keep following the OS setting until the visitor picks a theme by hand.
 * Returns a cleanup function; call it from onMount.
 */
export function watchSystemTheme() {
	if (!browser) return () => {};
	const query = window.matchMedia('(prefers-color-scheme: dark)');
	const onChange = (event) => {
		if (stored()) return;
		theme.set(event.matches ? 'dark' : 'light');
	};
	query.addEventListener('change', onChange);
	return () => query.removeEventListener('change', onChange);
}
