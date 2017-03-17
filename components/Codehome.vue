<template>
	<div class="cv-code">
<pre class="language-markup" v-if="code == 'html'"><code>&lt;section class="metier"&gt;
	&lt;h2&gt;Développeur&lt;/h2&gt;
	Web Front-end

	&lt;h2&gt;Formateur&lt;/h2&gt;
	html/css, Javascript, Workflow, WordPress

	&lt;h3&gt;Bonus&lt;/h3&gt;
	Compétences de graphiste
&lt;section&gt;
</code></pre>


<pre class="language-css" v-else-if="code == 'css'"><code>metiers {
	developpeur: web front-end;
	formateur: html-css javascript workflow wordpress;
	bonus: competences(graphiste);
}

carburant {
	boisson: "Coca-cola";
}</code></pre>

<pre class="language-javascript" v-else-if="code == 'javascript'"><code>const metiers = {
	developpeur: [ 'web', 'front-end' ],

	formateur: {
		htmlCss: true,
		javascript: true,
		workflow: true,
		wordpress: true
	},

	bonus: {
		compétences: 'graphiste'
	},

	carburant: 'Coca-cola'
}</code></pre>

<pre class="language-php" v-else-if="code == 'php'"><code>&lt;?php function metiers() {
	$developpeur = [ 'web', 'front-end' ];

	$formateur = [
		'html_css' => true,
		'javascript' => true,
		'workflow' => true,
		'wordpress' => true
	];

	$bonus = [
		'compétences' => 'graphiste'
	];

	$carburant = 'Coca-cola';
}</code></pre>
	</div>
</template>

<script>
/* import Prism from 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-php.min.js' */

const codes = ['html', 'css', 'javascript', 'php']

export default {
	name: 'codehome',
	data () {
		return {
			code: null
		}
	},

	created: function () {
		this.getHomeCode()
	},

	watch: {
		'$route': 'getHomeCode'
	},

	methods: {
		getHomeCode: function () {
			const selectedCode = codes[Math.floor(Math.random() * codes.length)]
			this.code = selectedCode
			/* setTimeout(function () {
				Prism.highlightAll()
			}, 10) */
		}
	}
}
</script>
