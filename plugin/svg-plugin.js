require('shelljs/global')
var fs = require('fs-extra')
var exec = require('child_process').exec
var cmd = 'svg-sprite-generate -d ./src/assets/icons -o ./static/sprite.svg'

function SvgPlugin (options) {
	// Configure options
}

SvgPlugin.prototype.apply = function (compiler) {
	compiler.plugin('entry-option', function () {
		generateSprite()
	})
}

function generateSprite () {
	console.log('\n[svg sprite] starting…')

	fs.stat('./src/assets/icons/sprite.svg', function (err, stat) {
		if (err === null) {
			console.log('[svg sprite] old sprite removed successfully')
			fs.unlink('./src/assets/images/sprite.svg')
		}
	})

	exec(cmd, function (error, stdout, stderr) {
		if (error) {
			console.log('[svg sprite] error: ' + stderr)
		}
		else {
			console.log('[svg sprite] complete!')
		}
	})
}

module.exports = SvgPlugin
