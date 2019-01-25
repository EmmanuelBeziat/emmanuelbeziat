<template>
	<div class="markdown-item" v-html="content"></div>
</template>

<script>
import slug from 'slug'
import MarkdownIt from 'markdown-it'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItBlockEmbed from 'markdown-it-block-embed'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItSmartArrows from 'markdown-it-smartarrows'

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'

export default {
	name: 'markdown',
	props: ['source', 'options'],

	data () {
		const md = new MarkdownIt({
			html: true,
			breaks: true,
			langPrefix: 'language-',
			typographer: true,
		})
			.use(MarkdownItAttrs)
			.use(MarkdownItBlockEmbed, {
				containerClassName: 'video',
				serviceClassPrefix: 'video--',
				outputPlayerSize: false,
				allowFullScreen: true
			})
			.use(MarkdownItAnchor, {
				permalink: this.$props.options !== undefined && this.$props.options.anchorPermalink !== undefined ? this.$props.options.anchorPermalink : false,
				slugify: value => slug(value).toLowerCase(),
				permalinkClass: 'icon-link post__anchor',
				permalinkSymbol: ''
			})
			.use(MarkdownItPrism)
			.use(MarkdownItSmartArrows)
		return {
			md: md
		}
	},

	computed: {
		content () {
			return this.md.render(this.$props.source)
		}
	}
}
</script>
