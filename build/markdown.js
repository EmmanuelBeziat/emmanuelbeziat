var md = require('markdown-it')
var MarkdownIt = new md({
	html: true,
	langPRefix: 'code-'
})

exports.parseSourceContent = data => {
	let split = '---\n'
	let i = data.indexOf(split)
	let info = []

	if (i !== -1) {
		let j = data.indexOf(split, i + split.length)

		if (j !== -1) {
			let str = data.slice(i + split.length, j).trim()

			data = data.slice(j + split.length)
			str.split('\n').forEach(line => {
				let i = line.indexOf(':')

				if (i !== -1) {
					let name = line.slice(0, i).trim()
					let value = line.slice(i + 1).trim()

					info[name] = value
				}
			})
		}
	}

	info.source = data

	return info
}

exports.markdownToHtml = data => {
	return MarkdownIt.render(data)
}
