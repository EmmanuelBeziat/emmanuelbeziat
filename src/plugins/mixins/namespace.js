export default {
	mounted () {
		document.documentElement.classList.add(this.namespace)
	},

	unmounted () {
		document.documentElement.classList.remove(this.namespace)
	}
}
