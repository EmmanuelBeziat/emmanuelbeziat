/**
 * Formats a date value according to the specified locale and options.
 *
 * @param {string|number|Date} value - The date value to format. Can be a string, number, or Date object.
 * @param {Object} options - An object with options to customize the date format.
 * @returns {string} - The formatted date string.
 */
export const dateFormat = (value, options) => new Intl.DateTimeFormat('fr-FR', options).format(new Date(value))
