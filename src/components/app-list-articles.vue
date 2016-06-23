<template>
	<div class="articles">
		<h2>files</h2>
		<div v-for="file in files">
			<a href="/blog/{{ file.name }}">{{ file.name }}</a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			path: '/src/content/articles',
			files: []
		}
	},

	props: {
		username: {
			type: String,
			required: true
		},
		repo: {
			type: String,
			required: true
		}
	},

	created: function () {
		if (this.username && this.repo) {
			this.getFiles()
		}
	},

	computed: {
		fullRepoUrl: function () {
			return this.username + '/' + this.repo
		}
	},

	methods: {
		getFiles: function () {
			this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path).then(function (response) {
				this.files = response.data
			}, function (response) {
				console.log(response)
			})
		}
	}
}
</script>
