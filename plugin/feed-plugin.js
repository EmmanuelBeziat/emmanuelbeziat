require('shelljs/global')
var fs = require('fs-extra')
var path = require('path')
var markdown = require('markdown-parse')
var blogConfig = require('../config/blog-config')

function FeedPlugin (options) {
	// Configure options
}

FeedPlugin.prototype.apply = function (compiler) {
	compiler.plugin('emit', function (compilation, callback) {
		compilation.feed = []
		generateFeedData(compilation.feed, 5)
		callback()
	})
}

function generateFeedData (feeds, n) {
	console.log('[rss feed] starting…')
	var folder = path.resolve(__dirname, '../src/posts/articles')

	ls(path.resolve(folder, '*.md')).forEach(function (element, index, fileArray) {
		var post = fs.readFileSync(path.resolve(folder, element), 'utf8')
		var feed = {}

		markdown(post, function (err, result) {
			if (result.attributes.publish === false) {
				return
			}

			feed.title = result.attributes.title
			feed.date = result.attributes.date || new Date()
			feed.updated = result.attributes.date || new Date()
			feed.tags = result.attributes.tags || ['']
			//feed.categories = result.attributes.categories || ['non-classe']
			feed.path = element.split('/').pop(),
			feed.excerpt = result.attributes.description || ''
		})

		feeds.push(feed)
	})

	console.log('[rss feed] complete!')
}

module.exports = FeedPlugin
