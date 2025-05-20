/**
 * Selects a random item from an array, ensuring it's not the same as the last selected item.
 * @param {Array} items - The array of items to select from.
 * @param {String} storageKey - The localStorage key to store the last selected index.
 * @returns {Object} - The selected item.
 */
export const selectRandomItem = (items, storageKey) => {
	const lastIndex = Number(localStorage.getItem(storageKey)) || 0
	let randomIndex = lastIndex

	while (randomIndex === lastIndex) {
		randomIndex = Math.floor(Math.random() * items.length)
	}

	localStorage.setItem(storageKey, randomIndex)

	return randomIndex
}
