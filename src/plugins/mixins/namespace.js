export default {
	created () {
		document.body.removeAttribute('class')
		document.body.classList.add(this.namespace)
	}
}
