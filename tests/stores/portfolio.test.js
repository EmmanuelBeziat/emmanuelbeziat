import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolio'

vi.mock('@/api/portfolio', () => ({
	fetchPortfolio: vi.fn()
}))

import { fetchPortfolio } from '@/api/portfolio'

const mockRefs = [
	{ slug: 'ref-1', title: 'Ref 1' },
	{ slug: 'ref-2', title: 'Ref 2' },
]

describe('usePortfolioStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
		vi.clearAllMocks()
	})

	it('should have an empty portfolio array by default', () => {
		const store = usePortfolioStore()
		expect(store.portfolio).toEqual([])
	})

	it('should fetch and store portfolio items', async () => {
		fetchPortfolio.mockResolvedValue(mockRefs)
		const store = usePortfolioStore()
		await store.fetch()
		expect(store.portfolio).toEqual(mockRefs)
	})

	it('should expose count getter', async () => {
		fetchPortfolio.mockResolvedValue(mockRefs)
		const store = usePortfolioStore()
		await store.fetch()
		expect(store.count).toBe(2)
	})

	it('should find a ref by slug', async () => {
		fetchPortfolio.mockResolvedValue(mockRefs)
		const store = usePortfolioStore()
		await store.fetch()
		expect(store.getRef('ref-1')).toEqual(mockRefs[0])
	})

	it('should handle fetch errors gracefully', async () => {
		fetchPortfolio.mockRejectedValue(new Error('Network error'))
		const store = usePortfolioStore()
		await expect(store.fetch()).resolves.not.toThrow()
		expect(store.portfolio).toEqual([])
	})
})
