<template>
	<section>
		<h1>Liste d'articles</h1>

		<article>
			{{renderedMarkdown}}
		</article>
	</section>
</template>

<script>
var gitHub = 'https://api.github.com/repos/EmmanuelBeziat/emmanuelbeziat/master/src/content/articles/exemple-d-article/index.md'

export default {
	data () {
		return {
			renderedMarkdown: "test"
		}
	}

}
</script>
