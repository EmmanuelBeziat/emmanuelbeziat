export default {
	mounted () {
		if (this.$router.currentRoute.hash) {
			this.scroll(this.$router.currentRoute.hash)
		}
	},

	methods: {
		scroll (hash) {
			setTimeout(() => document.querySelector(hash).scrollIntoView(true), 500)
		}
	}
}
