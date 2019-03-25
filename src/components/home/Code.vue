<template>
	<div class="cv-code">
		<Markdown :source="code" />
	</div>
</template>

<script>
import Markdown from '@/components/markdown/Markdown'

export default {
	name: 'code-home',

	data () {
		return {
			codes: ['html', 'css', 'js', 'php', 'md', 'pug'],
			html: `\`\`\`html
<section class="metier">
	<h2>Développeur</h2>
	Web, Front-end

	<h2>Workflow</h2>
	VSCode, Git, VueJS, PugJS, Stylus, CLI

	<h2>Formateur</h2>
	html/css, Javascript, Workflow, WordPress

	<h3>Bonus</h3>
	Compétences de graphiste

	<h3>Hobbies</h3>
	Sports (Parkour, Gym, Arts Martiaux)<br>
	Musique (Guitare)

	<h4>Carburant</h4>
	Coca-cola
</section>
\`\`\``,
			css: `\`\`\`css
.metiers {
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
}
\`\`\``,
			js: `\`\`\`javascript
const metiers = {
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
}
\`\`\``,
			php: `\`\`\`php
<?php function metiers() {
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
\`\`\``,
			md: `\`\`\`markdown
## Développeur
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
Coca-cola
\`\`\``,
			pug: `\`\`\`pug
section.metier
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
	 		li Sports (Parkour, Gym, Arts Martiaux)
			li Musique (Guitare)

	h4 Carburant
	| Coca-cola
\`\`\``
		}
	},

	computed: {
		code () {
			const random = this.codes[Math.floor(Math.random() * this.codes.length)]
			return this[random]
		}
	},

	components: {
		Markdown
	}
}
</script>
