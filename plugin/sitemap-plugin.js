require('shelljs/global')
var fs = require('fs-extra')
var path = require('path')
var slug = require('slug')
<<<<<<< HEAD
var moment = require('moment')
var  markdown = require('markdown-parse')
var blogConfig = require('../config/blog-config')

function SitemapPlugin(options) {
    // Configure options
}

SitemapPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
        compilation.sitemaps = []
        generateSitemapData(compilation.sitemaps)
        callback()
    })
}

function generateSitemapData(sitemaps, n) {
    console.log('[sitemap] starting…')
    var folder = path.resolve(__dirname, '../src/posts/articles')

    ls(path.resolve(folder, '*.md')).reverse().slice(0, n).forEach(function(post) {
        var url = ''
        var element  =  fs.readFileSync(path.resolve(folder, post),  'utf8')

        markdown(element,  function(err,  result) {
            if (result.attributes.publish === false) {
                return
            }

            url = result.attributes.basename || slug(result.attributes.title, { lower: true })
        })

        sitemaps.push(url)
    })

    console.log('[sitemap] complete!')
}

module.exports = SitemapPlugin
=======
var markdown = require('markdown-parse')
// var moment = require('moment')
// var blogConfig = require('../config/blog-config')

function SitemapPlugin(options) {
	// Configure options
}

SitemapPlugin.prototype.apply = function(compiler) {
	compiler.plugin('emit', function(compilation, callback) {
		compilation.sitemaps = []
		generateSitemapData(compilation.sitemaps)
		callback()
	})
}

function generateSitemapData(sitemaps, n) {
	console.log('[sitemap] starting…')
	var folder = path.resolve(__dirname, '../src/posts/articles')

	ls(path.resolve(folder, '*.md')).reverse().slice(0, n).forEach(function(post) {
		var url = ''
		var element = fs.readFileSync(path.resolve(folder, post), 'utf8')

		markdown(element, function(err, result) {
			if (result.attributes.publish === false) {
				return
			}

			url = result.attributes.basename || slug(result.attributes.title, { lower: true })
		})

		sitemaps.push(url)
	})

	console.log('[sitemap] complete!')
}

module.exports = SitemapPlugin
>>>>>>> vue2
