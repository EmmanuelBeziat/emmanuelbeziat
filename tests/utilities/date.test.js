import { describe, it, expect } from 'vitest'
import { dateFormat } from '@/utilities/date'

describe('dateFormat()', () => {
	it('should format a date string with default options', () => {
		const result = dateFormat('2023-06-15')
		expect(typeof result).toBe('string')
		expect(result.length).toBeGreaterThan(0)
	})

	it('should format a date with year, month and day options', () => {
		const result = dateFormat('2023-06-15', { year: 'numeric', month: 'long', day: 'numeric' })
		expect(result).toContain('2023')
		expect(result).toContain('15')
	})

	it('should format a Date object', () => {
		const date = new Date(2023, 5, 15) // June 15, 2023
		const result = dateFormat(date, { year: 'numeric' })
		expect(result).toContain('2023')
	})

	it('should format a timestamp number', () => {
		const timestamp = new Date('2023-01-01').getTime()
		const result = dateFormat(timestamp, { year: 'numeric' })
		expect(result).toContain('2023')
	})
})
