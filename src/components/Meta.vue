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

	components: {
		Head
	}
}
</script>
