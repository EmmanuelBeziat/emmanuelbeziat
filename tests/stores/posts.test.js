import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePostsStore } from '@/stores/posts'

vi.mock('@/api/posts', () => ({
	fetchPosts: vi.fn()
}))

import { fetchPosts } from '@/api/posts'

const mockPosts = [
	{ slug: 'post-1', title: 'Post 1', publish: true },
	{ slug: 'post-2', title: 'Post 2', publish: true },
]

describe('usePostsStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
		vi.clearAllMocks()
	})

	it('should have an empty posts array by default', () => {
		const store = usePostsStore()
		expect(store.posts).toEqual([])
	})

	it('should fetch and store posts', async () => {
		fetchPosts.mockResolvedValue(mockPosts)
		const store = usePostsStore()
		await store.fetch()
		expect(store.posts).toEqual(mockPosts)
	})

	it('should expose list getter', async () => {
		fetchPosts.mockResolvedValue(mockPosts)
		const store = usePostsStore()
		await store.fetch()
		expect(store.list).toEqual(mockPosts)
	})

	it('should expose count getter', async () => {
		fetchPosts.mockResolvedValue(mockPosts)
		const store = usePostsStore()
		await store.fetch()
		expect(store.count).toBe(2)
	})

	it('should find a post by slug', async () => {
		fetchPosts.mockResolvedValue(mockPosts)
		const store = usePostsStore()
		await store.fetch()
		expect(store.getPost('post-1')).toEqual(mockPosts[0])
	})

	it('should return undefined for unknown slug', async () => {
		fetchPosts.mockResolvedValue(mockPosts)
		const store = usePostsStore()
		await store.fetch()
		expect(store.getPost('unknown')).toBeUndefined()
	})

	it('should handle fetch errors gracefully', async () => {
		fetchPosts.mockRejectedValue(new Error('Network error'))
		const store = usePostsStore()
		await expect(store.fetch()).resolves.not.toThrow()
		expect(store.posts).toEqual([])
	})
})
