module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard'
	],
	// plugins: ['vue'],
	rules: {
		indent: ['error', 'tab', { 'SwitchCase': 1 }],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-return-assign': 0,
		'no-tabs': 0,
		'no-undef': 0,
		'brace-style': 0,
		'comma-dangle': ['error', 'only-multiline'],
		'no-irregular-whitespace': 0
	}
}
