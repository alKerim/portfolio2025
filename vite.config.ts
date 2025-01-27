import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// base: '/', // Ensure this is set correctly (default is '/')
	resolve: {
		alias: {
			$assets: 'static',
		}
	}
});

