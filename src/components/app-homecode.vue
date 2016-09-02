<template>
	<pre class="language-markup" v-if="code == 'html'"><code>&lt;section class="metier"&gt;
		&lt;h2&gt;Développeur&lt;/h2&gt;
		Web Front-end

		&lt;h2&gt;Formateur&lt;/h2&gt;
		html/css, Javascript, Workflow, WordPress
	&lt;section&gt;</code></pre>


	<pre class="language-css" v-if="code == 'css'"><code>metiers: {
		developpeur: web front-end;
		formateur: html-css javascript workflow wordpress;
	}</code></pre>

	<pre class="language-javascript" v-if="code == 'javascript'"><code>const metiers = function () {
		developpeur: [ 'web', 'front-end' ],

		formateur: {
			htmlCss: true,
			javascript: true,
			workflow: true,
			wordpress: true
		}
	}</code></pre>

	<pre class="language-bash" v-if="code == 'bash'"><code>$ metier developpeur --web --front-end
	$ metier formateur --html-css --javascript --workflow --wordpress</code></pre>
</template>

<script>
import Prism from 'prismjs'

export default {
	data () {
		return {
			code: null
		}
	},

	created: function () {
		this.getHomeCode()
	},

	methods: {
		/**
		 * Show randomly a code on a specific language
		 */
		getHomeCode: function () {
			const codes = ['html', 'css', 'javascript', 'bash']
			const selectedCode = codes[Math.floor(Math.random() * codes.length)]

			this.$set('code', selectedCode)
		}
	},

	ready () {
		setTimeout(function () {
			Prism.highlightAll()
		}, 10)
	}
}

</script>
