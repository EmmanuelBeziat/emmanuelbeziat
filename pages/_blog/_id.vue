<template>
	<article class="post">
		<h1>{{ title }}</h1>
		{{ body }}
	</article>
</template>

<script>
import axios from 'axios'

export default {
	validate ({ params }) {
		return !isNaN(+params.id)
	},

	data ({ params, error }) {
		return axios.get(`https://jsonplaceholder.typicode.com/posts/${+params.id}`)
		.then((res) => res.data)
		.catch(() => {
			error({ message: 'Post introuvable', statusCode: 404 })
		})
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	}
}
</script>
