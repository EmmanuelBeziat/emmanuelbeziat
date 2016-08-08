require('shelljs/global')

var fs = require('fs-extra')
var ora = require('ora')
var slug = require('slug')
var jsonfile = require('jsonfile')
var parser = require('markdown-parse')
var spinner = ora('Building pages markdown to json...\n')

spinner.start()

var files = fs.readdirSync('src/content/articles/', 'utf8')
var output = {'posts': []}
var fileOutput = 'static/posts/articles/page-1.json'

files.forEach(function(element) {
	var post = fs.readFileSync('src/content/articles/' + element, 'utf8')

	parser(post, function(err, result) {
		output.posts.push({
			'title': result.attributes.title,
			'author': result.attributes.author,
			'date': result.attributes.date,
			'template': result.attributes.template,
			'tags': result.attributes.tags,
			'basename': result.attributes.basename || slug(result.attributes.title, { lower: true }),
			'content': result.html
		})
	})
})

jsonfile.writeFile(fileOutput, output)
spinner.stop()

