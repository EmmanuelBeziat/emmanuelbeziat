import { openGraph } from '@/config'
import { Head } from '@egoist/vue-head'

export default {
	name: 'Head',

	data () {
		return {
			head: {
				title: ''
			}
		}
	},

	mounted () {
		this.getMetaData()
		this.$emit('update-head')
	},

	components: {
		Head
	},

	methods: {
		getMetaData () {
			const title = this.head.title || this.$route.meta.title || 'fallback'
			console.log(title)
			this.head.title = `Emmanuel Béziat :: ${title}`
			this.head.url = `${openGraph.url}${this.$route.fullPath}` || openGraph.url
			this.head.image = `${openGraph.url}${this.head.image}` || openGraph.image
			this.head.description = openGraph.description
		}
	}
}
