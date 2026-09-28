import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchCodes } from '@/api/codes'

vi.mock('@/config', () => ({
	api: { codes: 'https://api.example.com/codes' }
}))

describe('fetchCodes()', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn())
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	it('should return codes data', async () => {
		const mockData = [{ slug: 'code-1' }, { slug: 'code-2' }]

		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockData)
		})

		const result = await fetchCodes()
		expect(result).toEqual(mockData)
	})

	it('should throw an error on HTTP error response', async () => {
		fetch.mockResolvedValue({
			ok: false,
			status: 403
		})

		await expect(fetchCodes()).rejects.toThrow('fetchCodes: HTTP 403')
	})

	it('should throw when the response is not an array', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve({ message: 'oops' })
		})

		await expect(fetchCodes()).rejects.toThrow('fetchCodes: expected an array')
	})

	it('should throw when an item has no slug', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve([{ slug: 'ok', publish: true }, { title: 'no slug', publish: true }])
		})

		await expect(fetchCodes()).rejects.toThrow('fetchCodes: every item needs a slug')
	})
})
