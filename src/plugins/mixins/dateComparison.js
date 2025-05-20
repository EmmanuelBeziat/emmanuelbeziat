export const isOlderThan = (date, years) => {
	if (!date) return false

	const targetDate = new Date(date)
	const comparisonDate = new Date()
	comparisonDate.setFullYear(comparisonDate.getFullYear() - years)

	return targetDate <= comparisonDate
}
