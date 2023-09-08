// vite.config.js
import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
	root: 'src',
	build: {
	  rollupOptions: {
		input: glob.sync('./src/*.html'),
	  },
	  outDir: '../dist',
	},
	base: "/books-shop/",
  plugins: [injectHTML(), FullReload(['./src/**/**.html']), ghPages()],
});
