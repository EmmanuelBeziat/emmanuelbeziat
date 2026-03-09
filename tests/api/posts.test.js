import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchPosts } from '@/api/posts'

vi.mock('@/config', () => ({
	api: { posts: 'https://api.example.com/posts' }
}))

describe('fetchPosts()', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn())
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	it('should return only published posts', async () => {
		const mockData = [
			{ slug: 'post-1', publish: true },
			{ slug: 'post-2', publish: false },
			{ slug: 'post-3', publish: true },
		]

		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockData)
		})

		const result = await fetchPosts()
		expect(result).toHaveLength(2)
		expect(result.every(p => p.publish)).toBe(true)
	})

	it('should throw an error on HTTP error response', async () => {
		fetch.mockResolvedValue({
			ok: false,
			status: 404
		})

		await expect(fetchPosts()).rejects.toThrow('fetchPosts: HTTP 404')
	})

	it('should throw on network failure', async () => {
		fetch.mockRejectedValue(new Error('Network error'))
		await expect(fetchPosts()).rejects.toThrow('Network error')
	})
})
