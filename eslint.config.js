import js from '@eslint/js'
import vuePlugin from 'eslint-plugin-vue'

export default [
	js.configs.recommended,
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: await import('vue-eslint-parser'),
			parserOptions: {
				parser: '@babel/eslint-parser',
				requireConfigFile: false,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			vue: vuePlugin,
		},
		rules: {
			...vuePlugin.configs.base.rules,
			// ici tu ajoutes manuellement les règles essentielles (si tu veux)
			'vue/multi-word-component-names': 'off',
		},
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-return-assign': 'off',
			'no-tabs': 'off',
			'no-undef': 'off',
			'brace-style': 'off',
			'comma-dangle': ['error', 'only-multiline'],
			'no-irregular-whitespace': 'off',
		},
	},
]
