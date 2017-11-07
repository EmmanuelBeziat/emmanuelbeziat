<template>
	<div class="cv-code">
<pre class="language-markup" v-if="code === 'html'"><code>&lt;section class="metier"&gt;
	&lt;h2&gt;Développeur&lt;/h2&gt;
	Web, Front-end

	&lt;h2&gt;Workflow&lt;/h2&gt;
	VSCode, Git, VueJS, PugJS, Stylus, CLI

	&lt;h2&gt;Formateur&lt;/h2&gt;
	html/css, Javascript, Workflow, WordPress

	&lt;h3&gt;Bonus&lt;/h3&gt;
	Compétences de graphiste

	&lt;h3&gt;Hobbies&lt;/h3&gt;
	Sports (Parkour, Gym, Arts Martiaux) &lt;br&gt;
	Musique (Guitare)

	&lt;h4&gt;Carburant&lt;/h4&gt;
	Coca-cola
&lt;/section&gt;
</code></pre>

<pre class="language-css" v-else-if="code === 'css'"><code>.metiers {
	developpeur: web front-end;
	formateur: html-css javascript workflow wordpress;
}

.workflow {
	ide: "VisualStudio Code";
	environnement: nodejs;
	preprocesseur: stylus;
	templating: pugjs;
	framework: vuejs;
	autres: git, cli;
}

.bonus {
	competences: graphiste;
}

.hobbies {
	sports: parkour, gym, arts-martiaux;
	musique: guitare;
}

.carburant {
	boisson: "Coca-cola";
}</code></pre>

<pre class="language-javascript" v-else-if="code === 'javascript'"><code>const metiers = {
	developpeur: [ 'web', 'front-end' ],

	formateur: {
		htmlCss: true,
		javascript: true,
		workflow: true,
		wordpress: true
	},

	workflow: (favoris) => {
		return {
			ide: 'VisualStudio Code',
			env: 'NodeJS',
			preprocesseur: 'Stylus',
			templating: 'pugJS',
			framework: 'VueJS',
			autres: ['git', 'cli']
		}
	},

	bonus: {
		compétences: 'graphiste'
	},

	hobbies: {
		sports: ['Parkour', 'Gym', 'Arts Martiaux'],
		musique: 'Guitare'
	},

	carburant: 'Coca-cola'
}</code></pre>

<pre class="language-php" v-else-if="code === 'php'"><code>&lt;?php function metiers() {
	$developpeur = [ 'web', 'front-end' ];

	$formateur = [
		'html_css' => true,
		'javascript' => true,
		'workflow' => true,
		'wordpress' => true
	];
}

function workflow(favoris) {
	$ide = 'VisualStudio Code',
	$env = 'NodeJS',
	$preprocesseur = 'Stylus',
	$templating = 'pugJS',
	$framework = 'VueJS',
	$autres = ['git', 'cli']
}

$bonus = [
	'compétences' => 'graphiste'
];

$hobbies = [
	'sports' => ['Parkour', 'Gym', 'Arts Martiaux']
];

$carburant = 'Coca-cola';
</code></pre>

<pre class="language-markdown" v-else-if="code === 'markdown'"><code>## Développeur
Web, Front-end

## Workflow favoris

* VisualStudio Code
* Git
* VueJS
* PugJS
* Stylus
* CLI

## Formateur
html/css, Javascript, Workflow, WordPress

-----

### Bonus
Compétences de graphiste

### Hobbies
* [x] Sports (Parkour, Gym, Arts Martiaux)
* [x] Musique (Guitare)

### Carburant
Coca-cola</code></pre>

<pre class="language-pug" v-if="code === 'pug'"><code>section.metier
	h2 Développeur
	| Web, Front-end

	h2 Workflow
	- var favoriteWorkflow = ['VSCode', 'Git', 'VueJS', 'PugJS', 'Stylus', 'CLI']
	each workflow in favoriteWorkflow
		.workflow-item= workflow

	h2 Formateur
	p html/css, Javascript, Workflow, WordPress

	h3 Bonus
	p Compétences de graphiste

	h3 Hobbies
		ul
	 		li Sports (Parkour, Gym, Arts Martiaux) &lt;br&gt;
			li Musique (Guitare)

	h4 Carburant
	| Coca-cola
</code></pre>

	</div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/components/prism-php.min.js'
import 'prismjs/components/prism-markdown.min.js'
import 'prismjs/components/prism-pug.min.js'

const codes = ['html', 'css', 'javascript', 'php', 'markdown', 'pug']

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

			if (process.BROWSER_BUILD || process.browser) {
				setTimeout(function () {
					Prism.highlightAll()
				}, 10)
			}
		}
	}
}
</script>
