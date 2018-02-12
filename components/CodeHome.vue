<template>
	<div class="cv-code">
		<div v-if="code === 'html'" v-html="$md.render(html)"></div>
		<div v-if="code === 'css'" v-html="$md.render(css)"></div>
		<div v-if="code === 'javascript'" v-html="$md.render(javascript)"></div>
		<div v-if="code === 'php'" v-html="$md.render(php)"></div>
		<div v-if="code === 'markdown'" v-html="$md.render(markdown)"></div>
		<div v-if="code === 'pug'" v-html="$md.render(pug)"></div>
	</div>
</template>

<script>
const codes = ['html', 'css', 'javascript', 'php', 'markdown', 'pug']

export default {
	name: 'codehome',

	data () {
		return {
			code: null,
			html: '```html\n<section class="metier">\n	<h2>Développeur</h2>\n	Web, Front-end\n\n	<h2>Workflow</h2>\n	VSCode, Git, VueJS, PugJS, Stylus, CLI\n\n	<h2>Formateur</h2>\n	html/css, Javascript, Workflow, WordPress\n\n	<h3>Bonus</h3>\n	Compétences de graphiste\n\n	<h3>Hobbies</h3>\n	Sports (Parkour, Gym, Arts Martiaux) <br>\n	Musique (Guitare)\n\n	<h4>Carburant</h4>\n	Coca-cola\n</section>',
			css: '```css\n.metiers {\n	developpeur: web front-end;\n	formateur: html-css javascript workflow wordpress;\n}\n\n.workflow {\n	ide: "VisualStudio Code";\n	environnement: nodejs;\n	preprocesseur: stylus;\n	templating: pugjs;\n	framework: vuejs;\n	autres: git, cli;\n}\n\n.bonus {\n	competences: graphiste;\n}\n\n.hobbies {\n	sports: parkour, gym, arts-martiaux;\n	musique: guitare;\n}\n\n.carburant {\n	boisson: "Coca-cola";\n}',
			javascript: '```javascript\nconst metiers = {\n	developpeur: [ \'web\', \'front-end\' ],\n\n	formateur: {\n		htmlCss: true,\n		javascript: true,\n		workflow: true,\n		wordpress: true\n	},\n\n	workflow: (favoris) => {\n		return {\n			ide: \'VisualStudio Code\',\n			env: \'NodeJS\',\n			preprocesseur: \'Stylus\',\n			templating: \'pugJS\',\n			framework: \'VueJS\',\n			autres: [\'git\', \'cli\']\n		}\n	},\n\n	bonus: {\n		compétences: \'graphiste\'\n	},\n\n	hobbies: {\n		sports: [\'Parkour\', \'Gym\', \'Arts Martiaux\'],\n		musique: \'Guitare\'\n	},\n\n	carburant: \'Coca-cola\'\n}',
			pug: '```pug\nsection.metier\n	h2 Développeur\n	| Web, Front-end\n\n	h2 Workflow\n	- var favoriteWorkflow = [\'VSCode\', \'Git\', \'VueJS\', \'PugJS\', \'Stylus\', \'CLI\']\n	each workflow in favoriteWorkflow\n		.workflow-item= workflow\n\n	h2 Formateur\n	p html/css, Javascript, Workflow, WordPress\n\n	h3 Bonus\n	p Compétences de graphiste\n\n	h3 Hobbies\n		ul\n	 		li Sports (Parkour, Gym, Arts Martiaux) &lt;br&gt;\n			li Musique (Guitare)\n\n	h4 Carburant\n	| Coca-cola',
			php: '```php\n<?php function metiers() {\n	$developpeur = [ \'web\', \'front-end\' ];\n\n	$formateur = [\n		\'html_css\' => true,\n		\'javascript\' => true,\n		\'workflow\' => true,\n		\'wordpress\' => true\n	];\n}\n\nfunction workflow(favoris) {\n	$ide = \'VisualStudio Code\',\n	$env = \'NodeJS\',\n	$preprocesseur = \'Stylus\',\n	$templating = \'pugJS\',\n	$framework = \'VueJS\',\n	$autres = [\'git\', \'cli\']\n}\n\n$bonus = [\n	\'compétences\' => \'graphiste\'\n];\n\n$hobbies = [\n	\'sports\' => [\'Parkour\', \'Gym\', \'Arts Martiaux\']\n];\n\n$carburant = \'Coca-cola\';>',
			markdown: '```markdown\n## Développeur\nWeb, Front-end\n\n## Workflow favoris\n\n* VisualStudio Code\n* Git\n* VueJS\n* PugJS\n* Stylus\n* CLI\n\n## Formateur\nhtml/css, Javascript, Workflow, WordPress\n\n-----\n\n### Bonus\nCompétences de graphiste\n\n### Hobbies\n* [x] Sports (Parkour, Gym, Arts Martiaux)\n* [x] Musique (Guitare)\n\n### Carburant\nCoca-cola'
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
		}
	}
}
</script>
