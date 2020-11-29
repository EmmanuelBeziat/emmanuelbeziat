<template>
	<Head>
		<title>{{ head.title }}</title>

		<meta name="description" :content="head.description">
		<meta name="og:description" :content="head.description">
		<meta name="og:image" :content="head.image">
		<meta name="og:url" :content="head.url">
	</Head>
</template>

<script>
import { openGraph } from '@/config'
import { Head } from '@egoist/vue-head'

export default {
	name: 'Head',

	data () {
		return {
			head: {}
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
			this.head.title = this.$props.title || openGraph.title
			this.head.url = `${this.head.url}${this.$route.fullPath}` || openGraph.url
			this.head.image = `${openGraph.url}${this.head.image}` || openGraph.image
			this.head.description = openGraph.description
		}
	}
}
</script>
