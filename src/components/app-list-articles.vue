<template>
	<div class="articles">
		<div v-for="file in files">
			<h2><a href="/blog/{{ file.name }}">{{ file.name }}</a></h2>
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
