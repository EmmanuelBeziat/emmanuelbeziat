export default {
	methods: {
		getDynamicTitle (title) {
			this.head.title = title
			this.$emit('update-head')
			return title
		}
	},
}
