/**
 * Sets the namespace as a class on the document body.
 * Removes all existing classes from the body before adding the new namespace.
 *
 * @param {string} namespace - The namespace to set as a class on the body.
 */
export const defineNamespace = namespace => {
	document.body.removeAttribute('class')
	document.body.classList.add(namespace)
}
