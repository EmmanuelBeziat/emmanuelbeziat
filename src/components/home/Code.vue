<template>
	<div class="cv-code">
		<div class="cv-code__header">
			<div class="cv-code__buttons">
				<span class="fake-btn close"></span>
				<span class="fake-btn minify"></span>
				<span class="fake-btn expand"></span>
			</div>
			<span class="cv-code__title">emmanuel@code: ~/{{ code.name }} </span>
		</div>
		<Markdown :source="code.content" />
	</div>
</template>

<script>
import Markdown from '@/components/markdown/Markdown'

export default {
	name: 'code-home',

	data () {
		return {
			codes: ['html', 'css', 'javascript', 'php', 'markdown', 'pug'],
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
			javascript: `\`\`\`javascript
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
			markdown: `\`\`\`markdown
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
			return {
				name: random,
				content: this[random]
			}
		}
	},

	components: {
		Markdown
	}
}
</script>

<style lang="stylus">
.cv-code__header
	display flex
	background var(--color-background-light)
	color var(--color-text)
	text-align center
	padding 5px 10px
	border-radius .5rem .5rem 0 0
	position relative
	font-family var(--font-stack-code)

.cv-code__buttons
	.fake-btn
		width .7rem
		height .7rem
		border-radius 50%
		margin-right 6px
		display inline-block

	.close
		background var(--color-red)
	.minify
		background var(--color-yellow)
	.expand
		background var(--color-green)

.cv-code__title
	margin auto
	transform translateX(-32px)

.cv-code pre
	margin-top 0
	border-radius 0 0 .5rem .5rem

	&::after
		content none
</style>
