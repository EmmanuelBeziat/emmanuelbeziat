require('shelljs/global')

const fs = require('fs-extra')
const ora = require('ora')
const slug = require('slug')
const path = require('path')
const colors = require('colors')
const mkdirp = require('mkdirp')
const jsonfile = require('jsonfile')
const parser = require('markdown-parse')
const spinner = ora('Compiling markdown files to json…\n')
const maxArticlesPerPage = 10

const folders = {
	'src': path.join('src', 'content'),
	'dist': path.join('static', 'posts')
}

function getDirectories(srcpath) {
	return fs.readdirSync(srcpath).filter(function(file) {
		return fs.statSync(path.join(srcpath, file)).isDirectory();
	});
}

spinner.start()

mkdirp(folders.dist)

getDirectories(folders.src).forEach(function(directory) {
	let srcFolder = path.join(folders.src, directory)
	let distFolder = path.join(folders.dist, directory)

	// Create folder if don't exist
	mkdirp(distFolder)
	console.log(('+ Creating folder ' + distFolder).green)

	var files = fs.readdirSync(srcFolder, 'utf8')
	var output = {'posts': []}
	var pageCount = 1
	var items = 0

	files.forEach(function(element) {
		var post = fs.readFileSync(path.join(srcFolder, element), 'utf8')
		var fileOutput = null

		items++

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

		if (items === maxArticlesPerPage) {
			fileOutput = distFolder + '/page-' + pageCount + '.json'

			jsonfile.writeFile(fileOutput, output)
			console.log('	+ File: ' + fileOutput)
			pageCount++
			items = 0
			output = {'posts': []}
		}
	})

})

spinner.stop()

