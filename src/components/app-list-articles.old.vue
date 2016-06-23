<template>
	<article>
		{{{ article }}}
	</article>
</template>

<script>
var gitHub = 'https://raw.githubusercontent.com/EmmanuelBeziat/emmanuelbeziat/master/src/content/articles/exemple-d-article/index.md'

export default {
	data () {
		return {
			article: ""
		}
	},

	created: function () {
		this.fetchData()
	},

	filters: {
	},

	methods: {
		fetchData: function () {
			var xhr = new XMLHttpRequest()
			var self = this
			xhr.open('GET', gitHub)
			xhr.onload = function () {
				self.markdown(xhr.responseText)
			}
			xhr.send()
		},

		markdown: function(value) {
			// POST request to GitHub API
			this.$http({
				url: 'https://api.github.com/markdown',
				method: 'POST',
				data: {text: value, mode: 'gfm'}
			}).then(function (response) {
				// success callback
				this.article = response.data
			}, function (response) {
				// error callback
				console.log(response.data)
			});
		}

	}

}
</script>
