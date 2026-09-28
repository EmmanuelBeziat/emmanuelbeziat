/**
 * Selects a random item from an array, ensuring it's not the same as the last selected item.
 * @param {Array} items - The array of items to select from.
 * @param {String} storageKey - The localStorage key to store the last selected index.
 * @returns {number} - The selected index.
 * @throws {Error} If the array is empty.
 */
export const selectRandomItem = (items, storageKey) => {
	if (!items.length) throw new Error('selectRandomItem: items must not be empty')

	if (items.length < 2) {
		localStorage.setItem(storageKey, 0)
		return 0
	}

	const lastIndex = Number(localStorage.getItem(storageKey)) || 0
	let randomIndex = lastIndex

	while (randomIndex === lastIndex) {
		randomIndex = Math.floor(Math.random() * items.length)
	}

	localStorage.setItem(storageKey, randomIndex)

	return randomIndex
}
