```pug
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
```
