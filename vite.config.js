import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import svg from 'vite-svg-loader'

const pwa = {
	registerType: 'autoUpdate',
	mode: 'production',
	strategies: 'injectManifest',
	base: '/',
	srcDir: 'src',
	filename: 'serviceworker.js',
	includeAssets: ['/favicons/*'],
	manifest: {
		name: 'Emmanuel Béziat',
		short_name: 'EmmanuelB',
		description: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.',
		theme_color: '#233238',
		start_url: '/',
		display: 'standalone',
		background_color: '#1f2d32',
		icons: [
			{
				src: '/favicons/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/favicons/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	}
}

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

	return defineConfig({
		plugins: [vue(), VitePWA(pwa), svg()],
		css: {
			preprocessorOptions: {}
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			port: process.env.VITE_PORT
		},
		build: {
			target: 'es2020',
			outDir: process.env.VITE_DIST,
			emptyOutDir: true
		},
		esbuild: {
			target: 'es2020'
		},
		optimizeDeps: {
			esbuildOptions: {
				target: 'es2020',
				supported: {
					bigint: true
				}
			},
		},
	})
}
