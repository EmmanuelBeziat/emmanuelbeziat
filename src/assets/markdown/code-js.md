```javascript
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
```
