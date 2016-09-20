require('shelljs/global')
var path = require('path')
var fs = require('fs')
var yaml = require('js-yaml')

// PostPlugin.js
var reg = /^(-{3,}|;{3,})\n([\s\S]+?)\n\1(?:$|\n([\s\S]*)$)/

function PostPlugin(options) {
  // Configure plugin with options
}

PostPlugin.prototype.apply = function (compiler) {
  compiler.plugin('entry-option', function () {
    generateMetaData()
  })
}

function generateMetaData () {
  console.log('generate meta data\n')

  var postPath = path.resolve(__dirname, '../src/posts/articles')
  var postMetaList = []

  ls(path.resolve(postPath, '*.md')).forEach(function (post) {
    var metaData
    var content = cat(post)
    var match = reg.exec(content)

    if (match) {
      var yfm = yaml.load(yfm)

      try {
        metaData = yaml.load(yfm)
        metaData._title = path.basename(post, '.md').slice(11),
        metaData.year = path.basename(post, '.md').slice(0, 4)
        metaData.month = path.basename(post, '.md').slice(5, 7)
        metaData.year = path.basename(post, '.md').slice(8, 10)
      }
      catch (e) {
        console.log(post)
      }

      postMEtaList.unshift(metaData)
    }
  })

  fs.writeFileSync(path.resolve(__dirname, '../src/posts/articles/meta.json'), JSON.stringify(postMetaList))
  console.log('generate meta finished\n')
}

module.exports = PostPlugin
