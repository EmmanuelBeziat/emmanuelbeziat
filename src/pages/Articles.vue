<template>
	<section>
		<h1>Liste d'articles</h1>

		<list-articles>
			Loading…
		</list-articles>
	</section>
</template>

<script>
import listArticles from 'components/app-list-articles'

export default {
	data () {
		return {
		}
	},

	components: {
		listArticles
	}
}
</script>
