export const defineNamespace = namespace => {
	document.body.removeAttribute('class')
	document.body.classList.add(namespace)
}
