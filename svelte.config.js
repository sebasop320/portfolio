import adapter from '@sveltejs/adapter-node';

{import('@sveltejs/kit').Config}
const config = {
	kit: {
		adapter: adapter({ out: 'build' }),
	}
};

export default config;
