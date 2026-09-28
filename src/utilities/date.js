/**
 * Formats a date value according to the specified locale and options.
 * @param {string|number|Date} value - The date value to format. Can be a string, number, or Date object.
 * @param {Object} options - An object with options to customize the date format.
 * @returns {string} - The formatted date string.
 * @throws {Error} If the value is not a valid date.
 */
export const dateFormat = (value, options = {}) => {
	const date = new Date(value)

	if (Number.isNaN(date.getTime())) throw new Error(`dateFormat: invalid date "${value}"`)

	return new Intl.DateTimeFormat('fr-FR', options).format(date)
}
