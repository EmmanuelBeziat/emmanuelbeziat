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

	it('should return the posts as served (the API already hides drafts)', async () => {
		const mockData = [
			{ slug: 'post-1', publish: true },
			{ slug: 'post-2', publish: true },
		]

		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockData)
		})

		const result = await fetchPosts()
		expect(result).toEqual(mockData)
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

	it('should throw when the response is not an array', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve({ message: 'oops' })
		})

		await expect(fetchPosts()).rejects.toThrow('fetchPosts: expected an array')
	})

	it('should throw when an item has no slug', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve([{ slug: 'ok', publish: true }, { title: 'no slug', publish: true }])
		})

		await expect(fetchPosts()).rejects.toThrow('fetchPosts: every item needs a slug')
	})
})
