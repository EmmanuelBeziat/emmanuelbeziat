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
		return !isNaN(+params.slug)
	},

	data ({ params, error }) {
		return axios.get(`http://localhost:3001/posts/${+params.slug}`)
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
