<template>
	<div class="blog">
		<div v-for="post in posts">
			<nuxt-link :to="'/blog/'+post.id">{{ post.title }}</nuxt-link>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data () {
		return axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			return { posts: res.data }
		})
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	}
}
</script>
