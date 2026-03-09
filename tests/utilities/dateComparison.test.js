import { describe, it, expect } from 'vitest'
import { isOlderThan } from '@/utilities/dateComparison'

describe('isOlderThan()', () => {
	it('should return true for a date older than the specified years', () => {
		const oldDate = new Date()
		oldDate.setFullYear(oldDate.getFullYear() - 10)
		expect(isOlderThan(oldDate.toISOString(), 5)).toBe(true)
	})

	it('should return false for a recent date', () => {
		const recentDate = new Date()
		recentDate.setFullYear(recentDate.getFullYear() - 2)
		expect(isOlderThan(recentDate.toISOString(), 5)).toBe(false)
	})

	it('should return false when date is null or undefined', () => {
		expect(isOlderThan(null, 5)).toBe(false)
		expect(isOlderThan(undefined, 5)).toBe(false)
	})

	it('should return false for a date exactly at the boundary', () => {
		const boundaryDate = new Date()
		boundaryDate.setFullYear(boundaryDate.getFullYear() - 5)
		boundaryDate.setDate(boundaryDate.getDate() + 1) // one day after boundary
		expect(isOlderThan(boundaryDate.toISOString(), 5)).toBe(false)
	})

	it('should accept a Date object', () => {
		const oldDate = new Date()
		oldDate.setFullYear(oldDate.getFullYear() - 10)
		expect(isOlderThan(oldDate, 5)).toBe(true)
	})
})
