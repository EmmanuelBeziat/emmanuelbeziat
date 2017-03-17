module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
	  "indent": [
		  "error",
		  "tab"
	  ],
	  "no-console": 0,
	  "no-tabs": 0
  },
  globals: {}
}
