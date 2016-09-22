require('shelljs/global')
var fs = require('fs-extra')
var slug = require('slug')
var path = require('path')
var jsonfile = require('jsonfile')
var markdown = require('markdown-parse')
var folders =  path.resolve(__dirname, '../src/posts')

function PostPlugin (options) {
  // Configure options
}

PostPlugin.prototype.apply = function (compiler) {
  compiler.plugin("entry-option", function (){
    generateMetaData()
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

function generateMetaData () {
  console.log('Generate post metadatas started…')
  getDirectories(folders).forEach(function (directory) {
    var folder = path.resolve(__dirname, '../src/posts/' + directory)
    var fileContent = []

    ls(path.resolve(folder, '*.md')).forEach(function (element, index, fileArray) {
      var post = fs.readFileSync(path.resolve(folder, element), 'utf8')

      markdown(post, function (err, result) {
        if (directory === 'articles') {

          fileContent.unshift({
            'title': result.attributes.title,
            'image': result.attributes.image || 'https://images.emmanuelbeziat.com/social-thumbnail.jpg',
            'date': result.attributes.date || new Date(),
            'tags': result.attributes.tags || [''],
            'categories': result.attributes.categories || ['non-classe'],
            'template': result.attributes.template || 'blog',
            'basename': result.attributes.basename || slug(result.attributes.title, { lower: true }),
            'path': element.split('/').pop(),
            'description': result.attributes.description || '',
            'disqus': result.attributes.disqus || true
          })
        }
        else if (directory === 'portfolio') {
          fileContent.unshift({
            'title': result.attributes.title,
            'image': result.attributes.image || '',
            'color': result.attributes.color || 'black',
            'date': result.attributes.date || new Date(),
            'tags': result.attributes.tags || [''],
            'clients': result.attributes.clients || [''],
            'template': result.attributes.template || 'portfolio',
            'basename': result.attributes.basename || slug(result.attributes.title, { lower: true }),
            'path': element.split('/').pop()
          })
        }
      })
    })

    createJsonFiles(path.resolve(folder, 'meta.json'), fileContent)
  })
  console.log('Generate post metadatas finished!')
}

module.exports = PostPlugin
