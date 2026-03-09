import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchPortfolio } from '@/api/portfolio'

vi.mock('@/config', () => ({
	api: { refs: 'https://api.example.com/portfolio' }
}))

describe('fetchPortfolio()', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn())
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	it('should return portfolio data', async () => {
		const mockData = [{ slug: 'ref-1' }, { slug: 'ref-2' }]

		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockData)
		})

		const result = await fetchPortfolio()
		expect(result).toEqual(mockData)
	})

	it('should throw an error on HTTP error response', async () => {
		fetch.mockResolvedValue({
			ok: false,
			status: 500
		})

		await expect(fetchPortfolio()).rejects.toThrow('fetchPortfolio: HTTP 500')
	})
})
