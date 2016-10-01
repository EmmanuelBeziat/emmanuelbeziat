var markdown = require('markdown-parse')
var metaData = {}
var rawContent

module.exports = function (post) {

  markdown(post, function(err, result) {
    rawContent = result.body
    metaData.title = result.attributes.title
    metaData.image = result.attributes.image || 'https://images.emmanuelbeziat.com/social-thumbnail.jpg'
    metaData.date = result.attributes.date || new Date()
    metaData.tags = result.attributes.tags || ['']
    metaData.clients = result.attributes.clients || ['']
    metaData.categories = result.attributes.categories || ['non-classe']
    metaData.template = result.attributes.template || 'post'
    metaData.description = result.attributes.description || ''
    metaData.disqus = result.attributes.disqus || true
    metaData.publish = result.attributes.publish || true
  });

  return JSON.stringify({
    rawContent: rawContent,
    metaData: metaData
  })
}
