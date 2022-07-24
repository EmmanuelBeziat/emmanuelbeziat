import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

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
		apple_mobile_web_app_capable: 'no',
		apple_mobile_web_app_status_bar_style: 'white',
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
			},
			{
				src: '/favicons/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any maskable'
			}
		]
	}
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), VitePWA(pwa)],
  resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
	server: {
		port: 3033
	},
	build: {
		outDir: '../site'
	}
})
