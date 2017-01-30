import Prism from 'prismjs'
import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/components/prism-bash.min.js'

const md = require('markdown-it')({
	html: true,
	breaks: true,
	linkify: true,
	highlight: function (str, lang) {
		setTimeout(function () {
			Prism.highlightAll()
		}, 10)
		// Hacky ugly stuff to ensure that even if the connexion is slow, the highlighting is done
		// TODO: Find a better solution
		setTimeout(function () {
			Prism.highlightAll()
		}, 250)
		return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + md.utils.escapeHtml(str) + '</code></pre>'
	}
})
.use(require('markdown-it-attrs'))
.use(require('markdown-it-block-embed'), {
	containerClassName: 'video',
	serviceClassPrefix: 'video--',
	outputPlayerSize: false,
	allowFullScreen: true
})
.use(require('markdown-it-anchor'), {
	permalink: false,
	permalinkClass: 'icon-link post__anchor',
	permalinkSymbol: ''
})

export default md
