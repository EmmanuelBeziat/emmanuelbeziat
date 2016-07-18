<template>
	<section>
		<h1>Liste d'articles (github)</h1>

		<list-articles username="EmmanuelBeziat" repo="emmanuelbeziat"></list-articles>
	</section>
</template>

<script>
//import listArticles from 'components/app-list-articles'
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
