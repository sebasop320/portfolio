# sebasop — portfolio

Single-page developer portfolio. SvelteKit 2 + Svelte 5 (runes) + Tailwind CSS 4, bilingual EN/ES, dark and light themes, zero runtime dependencies.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # serve the build locally
```

Node 18.13+ is required.

### Starting from scratch instead

```bash
npx sv create sebasop-portfolio   # replaces the old `npm create svelte@latest`
cd sebasop-portfolio
npx sv add tailwindcss            # wires up @tailwindcss/vite and src/app.css
```

Then copy `src/lib`, `src/routes`, `src/app.css` and `src/app.html` over the generated files.

## How it fits together

```
src/
├─ app.html                 inline script: applies theme + lang before first paint
├─ app.css                  Tailwind v4 theme tokens, dark variant, base styles
├─ lib/
│  ├─ stores/
│  │  ├─ i18n.js            locale store + derived $t('dot.path') translator
│  │  └─ theme.js           theme store, localStorage, prefers-color-scheme watcher
│  ├─ data/
│  │  ├─ projects.js        project entries with EN/ES summaries
│  │  └─ skills.js          skill groups
│  └─ components/
│     ├─ layout/            page chrome, rendered once in +layout.svelte
│     │  ├─ Header.svelte   nav, mobile menu, both toggles
│     │  └─ Footer.svelte
│     ├─ sections/          one file per band of the page, in scroll order
│     │  ├─ Hero.svelte  About.svelte
│     │  ├─ Projects.svelte  ProjectCard.svelte
│     │  └─ Skills.svelte  Contact.svelte
│     ├─ ui/                reusable pieces with no content of their own
│     │  ├─ SectionHeading.svelte
│     │  ├─ LanguageToggle.svelte
│     │  └─ ThemeToggle.svelte
│     └─ icons/Icon.svelte  inline SVG icon set
└─ routes/
   ├─ +layout.svelte        skip link, header, footer
   ├─ +layout.js            prerender = true
   └─ +page.svelte          section order + per-locale <title>/description
```

### Language

`src/lib/stores/i18n.js` holds one dictionary per locale. Components read strings through the derived store:

```svelte
<script>
  import { t, locale } from '$lib/stores/i18n.js';
</script>

<h2>{$t('projects.heading')}</h2>
<p>{project.summary[$locale]}</p>
```

Adding a language means adding a key to `dictionary`, adding the code to `LOCALES`, and adding a summary key to each project. The initial locale comes from `localStorage` first, then `navigator.language`, and the choice persists.

### Theme

`dark` is applied as a class on `<html>`, so every `dark:` utility works. The `@custom-variant` line at the top of `app.css` is what switches Tailwind 4 from its media-query default to class-based dark mode — don't delete it.

The site follows the OS setting until someone clicks the toggle; after that the explicit choice wins and is the only thing written to `localStorage`. The script in `app.html` runs before paint so there's no flash of the wrong theme.

### Design tokens

Colors and fonts live in the `@theme` block in `app.css` — change them there and every utility (`bg-paper`, `text-ash`, `border-seam`, `text-pine`) updates. The accent is pine `#166B56` in light mode and mint `#54C8A4` in dark.

### Icons

`Icon.svelte` inlines Lucide geometry so nothing is installed at runtime. To use the package instead:

```bash
npm i @lucide/svelte
```

```svelte
import { Sun, Moon, Menu, X } from '@lucide/svelte';
```

## Before you deploy

- Replace the contact handles in `Contact.svelte` and the repo/demo URLs in `data/projects.js`.
- Swap `@sveltejs/adapter-auto` for the adapter matching your host (`adapter-static` works, since the whole site prerenders).
- Add an Open Graph image and `<meta property="og:*">` tags in `+page.svelte`.
