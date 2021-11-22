module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		// ecmaVersion: 2020,
		parser: '@babel/eslint-parser'
	},
	'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
	// plugins: ['vue'],
	rules: {
		indent: ['error', 'tab', { 'SwitchCase': 1 }],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-return-assign': 0,
		'no-tabs': 0,
		'no-undef': 0,
		'brace-style': 0,
		'comma-dangle': ['error', 'only-multiline'],
		'no-irregular-whitespace': 0,
		'vue/multi-word-component-names': 0
	}
}
