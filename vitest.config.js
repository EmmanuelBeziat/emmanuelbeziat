import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
	viteConfig({ mode: 'test' }),
	defineConfig({
		test: {
			environment: 'jsdom',
			coverage: {
				include: undefined,
				exclude: [...configDefaults.exclude, 'e2e/**'],
			},
			root: fileURLToPath(new URL('./', import.meta.url)),
		},
	}),
)

