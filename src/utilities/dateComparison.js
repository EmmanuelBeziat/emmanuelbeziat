/**
 * Checks if a given date is older than a specified number of years
 * @param {string|Date} date - The date to check
 * @param {number} years - The number of years to compare against
 * @returns {boolean} True if the date is older than the specified years, false otherwise
 */
export const isOlderThan = (date, years) => {
	if (!date) return false

	const targetDate = new Date(date)
	const comparisonDate = new Date()
	comparisonDate.setFullYear(comparisonDate.getFullYear() - years)

	return targetDate <= comparisonDate
}
