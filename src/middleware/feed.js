var axios = require('axios')

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
	return axios.get('https://rest.emmanuelbeziat.com/posts')
		.then((res) => {
			return { posts: res.data }
		})

	console.log('[rss feed] complete!')
}

module.exports = FeedPlugin
