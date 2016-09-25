var reg = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/
var yaml = require('js-yaml')

module.exports = function (content) {
  var match = reg.exec(content)
  var metaData
  if (!match) {
    throw new Error('post not valid')
  }
  var rawMeta = match[2]
  var rawContent = match[3]

  try {
    metaData = yaml.load(rawMeta)
  } catch (e) {
    throw new Error(rawMeta)
  }
  return JSON.stringify({
    rawContent: rawContent,
    metaData: metaData
  })
}
