import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'
import svg from 'vite-svg-loader'
import stylelint from 'vite-plugin-stylelint'

const pwa = {
	registerType: 'autoUpdate',
	mode: 'production',
	strategies: 'injectManifest',
	base: '/',
	srcDir: 'src',
	filename: 'serviceworker.js',
	includeAssets: ['/favicons/*'],
	workbox: {
		globPatterns: ['**/*.{js,css,html,svg,ico,png,webp,avif,avifs,woff,woff2}'],
	},
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
				src: '/favicons/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/favicons/web-app-manifest-512x512.png',
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
		plugins: [
			vue(),
			stylelint(),
			VitePWA(pwa),
			svg(),
			createHtmlPlugin({
				inject: {
					data: {
						title: process.env.VITE_OG_TITLE,
						description: process.env.VITE_OG_DESCRIPTION,
						ogImage: process.env.VITE_OG_IMAGE,
						ogUrl: process.env.VITE_OG_URL
					}
				}
			}),
		],
		css: {
			preprocessorOptions: {}
		},
		assetsInclude: ['**/*.avifs'],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			port: process.env.VITE_PORT
		},
		build: {
			target: 'es2022',
			outDir: process.env.VITE_DIST,
			emptyOutDir: true
		},
		esbuild: {
			target: 'es2022'
		},
		optimizeDeps: {
			include: ['vite-plugin-stylelint'],
			esbuildOptions: {
				target: 'es2022',
				supported: {
					bigint: true
				}
			},
		}
	})
}
