import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCodesStore } from '@/stores/codes'

vi.mock('@/api/codes', () => ({
	fetchCodes: vi.fn()
}))

import { fetchCodes } from '@/api/codes'

const mockCodes = [
	{ slug: 'code-1', title: 'Code 1' },
	{ slug: 'code-2', title: 'Code 2' },
]

describe('useCodesStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
		vi.clearAllMocks()
	})

	it('should have an empty codes array by default', () => {
		const store = useCodesStore()
		expect(store.codes).toEqual([])
	})

	it('should fetch and store codes', async () => {
		fetchCodes.mockResolvedValue(mockCodes)
		const store = useCodesStore()
		await store.fetch()
		expect(store.codes).toEqual(mockCodes)
	})

	it('should expose count getter', async () => {
		fetchCodes.mockResolvedValue(mockCodes)
		const store = useCodesStore()
		await store.fetch()
		expect(store.count).toBe(2)
	})

	it('should find a code by slug', async () => {
		fetchCodes.mockResolvedValue(mockCodes)
		const store = useCodesStore()
		await store.fetch()
		expect(store.getCode('code-1')).toEqual(mockCodes[0])
	})

	it('should handle fetch errors gracefully', async () => {
		fetchCodes.mockRejectedValue(new Error('Network error'))
		const store = useCodesStore()
		await expect(store.fetch()).resolves.not.toThrow()
		expect(store.codes).toEqual([])
	})
})
