require('shelljs/global')
var fs = require('fs-extra')
var exec = require('child_process').exec
var cmd = 'svg-sprite-generate -d ./src/assets/icons -o ./src/assets/icons/sprite.svg'

function SvgPlugin (options) {
  // Configure options
}

SvgPlugin.prototype.apply = function (compiler) {
  compiler.plugin('entry-option', function () {
    generateSprite()
  })
}

function generateSprite () {
  console.log('\nGenerate svg sprite started…')

  fs.stat('./src/assets/icons/sprite.svg', function (err, stat) {
    if (err === null) {
      console.log('old sprite removed')
      fs.unlink('./src/assets/icons/sprite.svg')
    }
  })

  exec(cmd, function (error, stdout, stderr) {
    if (undefined !== error) {
    }
  })

  console.log('Generate svg sprite finished!')
}

module.exports = SvgPlugin
