require('shelljs/global')
var fs = require('fs-extra')
var slug = require('slug')
var path = require('path')
var jsonfile = require('jsonfile')
var markdown = require('markdown-parse')
var folders =  path.resolve(__dirname, '../src/posts')
var blogConfig = require('../config/blog-config')
var shorturl = require('shorturl')

function FeedPlugin (options) {
	// Configure options
}

FeedPlugin.prototype.apply = function (compiler) {
	compiler.plugin('emit', function (compilation, callback) {
		generateFeedData(compilation.feed, 5)
		callback()
	})
}

function getDirectories (srcpath) {
	return fs.readdirSync(srcpath).filter(function (file) {
		return fs.statSync(path.join(srcpath, file)).isDirectory();
	});
}

function createJsonFiles (fileName, fileContent) {
	jsonfile.writeFile(fileName, fileContent)
	console.log('	+ Files: ' + fileName)
}

function generateFeedData (feeds, n) {
	console.log('[rss feed] starting…')
	getDirectories(folders).forEach(function (directory) {
		var folder = path.resolve(__dirname, '../src/posts/' + directory)
		var fileContent = []
		var feed = {}

		ls(path.resolve(folder, '*.md')).forEach(function (element, index, fileArray) {
			var post = fs.readFileSync(path.resolve(folder, element), 'utf8')

			markdown(post, function (err, result) {
				var postSlug = result.attributes.basename || slug(result.attributes.title, { lower: true })
				var postUrl = blogConfig.scheme + '://' + blogConfig.host + '/blog/' + postSlug

				fileContent.unshift({
					'title': result.attributes.title,
					'image': result.attributes.image || 'https://images.emmanuelbeziat.com/social-default-fb.jpg',
					'date': result.attributes.date || new Date(),
					'tags': result.attributes.tags || [''],
					'categories': result.attributes.categories || ['non-classe'],
					'template': result.attributes.template || 'blog',
					'basename': postSlug,
					'path': element.split('/').pop(),
					'description': result.attributes.description || '',
					'disqus': result.attributes.disqus || true,
					'publish': result.attributes.publish === false ? false : true
				})
			})
		})

		createJsonFiles(path.resolve(folder, 'meta.json'), fileContent)
	})
	console.log('[rss feed] complete!')
}

module.exports = FeedPlugin
