require('shelljs/global')

var fs = require('fs-extra')
var ora = require('ora')
var slug = require('slug')
var path = require('path')
var colors = require('colors')
var mkdirp = require('mkdirp')
var jsonfile = require('jsonfile')
var markdown = require('markdown-parse')
var spinner = ora('Compiling markdown files to json…\n')
//var maxArticlesPerPage = 10

var test = ''

var md = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true
}).use(require('markdown-it-attrs')).use(require('markdown-it-front-matter'), function(fm) {
	test = fm
})

var folders = {
	'src': path.join('content'),
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

var md = require('markdown-it')({
	html: true,
	break: true,
	linkify: true
}).use(require('markdown-it-attrs'))

spinner.start()

mkdirp(folders.dist)

getDirectories(folders.src).forEach(function(directory) {
	var srcFolder = path.join(folders.src, directory)
	var distFolder = path.join(folders.dist, directory)

	// Create folder if don't exist
	mkdirp(distFolder)
	console.log(('+ Creating folder ' + distFolder).green)

	var files = fs.readdirSync(srcFolder, 'utf8')
	var fileContent = { 'posts': [] }
	var pageCount = 1
	var items = 0

	files.forEach(function(element, index, fileArray) {
		var post = fs.readFileSync(path.join(srcFolder, element), 'utf8')
		var fileName = element.substr(0, element.lastIndexOf('.')) + '.json'

		md.render(post)

		//items++

		markdown(post, function(err, result) {
			fileContent.posts.push({
				'title': result.attributes.title,
				'author': result.attributes.author || 'Emmanuel B.',
				'date': result.attributes.date || new Date(),
				'tags': result.attributes.tags || [''],
				'categories': result.attributes.categories || ['non-classe'],
				'template': result.attributes.template || 'post.vue',
				'basename': result.attributes.basename || slug(result.attributes.title, { lower: true }),
				'content': md.render(result.body)
			})
		}) //*/

		/*if (index === fileArray.length - 1) {
			createJsonFiles(fileName, fileContent)
		}

		else if (items === maxArticlesPerPage) {
			createJsonFiles(fileName, fileContent)
			pageCount++
			items = 0
			fileContent = {'posts': []}
		} //*/
	})

	createJsonFiles(path.join(distFolder, 'articles.json'), fileContent)
})

spinner.stop()

