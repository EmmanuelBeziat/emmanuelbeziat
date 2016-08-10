require('shelljs/global')

var fs = require('fs-extra')
var ora = require('ora')
var slug = require('slug')
var path = require('path')
var colors = require('colors')
var mkdirp = require('mkdirp')
var jsonfile = require('jsonfile')
var parser = require('markdown-parse')
var spinner = ora('Compiling markdown files to json…\n')
var maxArticlesPerPage = 10

var folders = {
	'src': path.join('src', 'content'),
	'dist': path.join('static', 'posts')
}

function getDirectories(srcpath) {
	return fs.readdirSync(srcpath).filter(function(file) {
		return fs.statSync(path.join(srcpath, file)).isDirectory();
	});
}

function createJsonFiles(fileName, fileContent) {
	jsonfile.writeFile(fileName, fileContent)
	console.log('	+ Files: ' + fileName)
}

spinner.start()

mkdirp(folders.dist)

getDirectories(folders.src).forEach(function(directory) {
	var srcFolder = path.join(folders.src, directory)
	var distFolder = path.join(folders.dist, directory)

	// Create folder if don't exist
	mkdirp(distFolder)
	console.log(('+ Creating folder ' + distFolder).green)

	var files = fs.readdirSync(srcFolder, 'utf8')
	var fileContent = {'posts': []}
	var pageCount = 1
	var items = 0

	files.forEach(function(element, index, fileArray) {
		var post = fs.readFileSync(path.join(srcFolder, element), 'utf8')
		var fileName = distFolder + '/page-' + pageCount + '.json'

		items++

		parser(post, function(err, result) {
			fileContent.posts.push({
				'title': result.attributes.title,
				'author': result.attributes.author || 'Emmanuel B.',
				'date': result.attributes.date || new Date().format('Y-m-d h:i'),
				'tags': result.attributes.tags || '',
				'template': result.attributes.template || 'post.vue',
				'basename': result.attributes.basename || slug(result.attributes.title, { lower: true }),
				'content': result.html
			})
		})

		if (index === fileArray.length - 1) {
			createJsonFiles(fileName, fileContent)
		}

		else if (items === maxArticlesPerPage) {
			createJsonFiles(fileName, fileContent)
			pageCount++
			items = 0
			fileContent = {'posts': []}
		}
	})

})

spinner.stop()

