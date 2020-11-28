import { openGraph } from '@/config'

export default {
	data () {
		return {
			head: {
				title: openGraph.title,
				url: openGraph.url,
				image: openGraph.image,
				description: openGraph.description
			}
		}
	},

	mounted () {
		this.head.url = `${this.head.url}${this.$route.fullPath}`
		this.head.image = `${openGraph.url}${this.head.image}`
		this.$emit('update-head')
	},

	head: {
		title () {
			return {
				inner: `${this.head.title}`
			}
		},

		meta () {
			return [
				{ id: 'og:description', property: 'og:description', content: this.head.description },
				{ id: 'og:image', property: 'og:image', content: this.head.image },
				{ id: 'og:url', property: 'og:url', content: this.head.url }
			]
		}
	}
}
