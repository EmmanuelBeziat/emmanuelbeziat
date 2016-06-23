<template>
	<div class="files">
		<h2>files</h2>
		<div v-for="file in files">
			{{ file.name }}
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
			this.$http.get('https://api.github.com/repos/' + this.fullRepoUrl + '/contents' + this.path,
				function(data) {
					this.files = data
				}
			)
		}
	}
}
</script>
