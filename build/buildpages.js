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

var folders = {
	'src': path.join('content'),
	'dist': path.join('static', 'posts')
}

var md = require('markdown-it')({
		html: true,
		breaks: true,
		linkify: true
	})
	.use(require('markdown-it-attrs'))
	.use(require('markdown-it-anchor'), {
		permalink: false,
		permalinkClass: 'icon-link post__anchor',
		permalinkSymbol: ''
	})

var blockEmbedPlugin = require("markdown-it-block-embed");

/**
 * Todo: remove when options declaration will be fied
 * https://github.com/rotorz/markdown-it-block-embed/issues/2
 */
md.use(blockEmbedPlugin, {
	containerClassName: 'video',
	serviceClassPrefix: 'video--',
	outputPlayerSize: false,
	allowFullScreen: true
});

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
	var fileContent = { 'posts': [] }

	files.forEach(function(element, index, fileArray) {
		var post = fs.readFileSync(path.join(srcFolder, element), 'utf8')

		markdown(post, function(err, result) {
			if (directory === 'articles') {
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
			}
			else if (directory === 'portfolio') {
				fileContent.posts.push({
					'title': result.attributes.title,
					'image': result.attributes.image || '',
					'date': result.attributes.date || new Date(),
					'tags': result.attributes.tags || [''],
					'clients': result.attributes.categories || [''],
					'template': result.attributes.template || 'portfolio.vue',
					'basename': result.attributes.basename || slug(result.attributes.title, { lower: true }),
					'content': md.render(result.body)
				})
			}
		})
	})

	createJsonFiles(path.join(distFolder, directory + '.json'), fileContent)
})

spinner.stop()

