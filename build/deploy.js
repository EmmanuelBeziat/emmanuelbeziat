require('shelljs/global')
var ghpages = require('gh-pages')
var path = require('path')
var color = require('color')
var inquirer = require('inquirer')

var questions = [
	{
		type: 'input',
		name: 'commit',
		message: 'Add a commit message: '
	}
]

// Ask for commit message, then push
inquirer.prompt(questions).then(function (answers) {
	console.log('Starting to publish…')

	ghpages.publish(path.join(__dirname, 'dist'), {
		message: 'test message'
	})

	console.log('Publish complete!')
})
