<template>
	<section>
		<h1>Liste d'articles (github)</h1>

		<github-file-explorer username="EmmanuelBeziat" repo="emmanuelbeziat"></github-file-explorer>
	</section>
</template>

<script>
//import listArticles from 'components/app-list-articles'
import githubFileExplorer from 'components/github-file-explorer'

export default {
	data () {
		return {
		}
	},

	components: {
		githubFileExplorer
	}
}
</script>
