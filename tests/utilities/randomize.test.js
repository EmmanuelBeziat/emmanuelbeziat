import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { selectRandomItem } from '@/utilities/randomize'

const localStorageMock = (() => {
	let store = {}
	return {
		getItem: (key) => store[key] ?? null,
		setItem: (key, value) => { store[key] = String(value) },
		clear: () => { store = {} },
		removeItem: (key) => { delete store[key] }
	}
})()

describe('selectRandomItem()', () => {
	const storageKey = 'test-random-key'
	const items = ['🍎', '🍌', '🍒', '🍇', '🍓']

	beforeEach(() => {
		vi.stubGlobal('localStorage', localStorageMock)
		localStorageMock.clear()
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	it('should not return the same item as the last selected', () => {
		// Set last index to 0 (🍎)
		localStorageMock.setItem(storageKey, '0')
		const result = selectRandomItem(items, storageKey)
		expect(result).not.toBe('🍎')
	})

	it('should store the new index in localStorage', () => {
		selectRandomItem(items, storageKey)
		const storedIndex = localStorageMock.getItem(storageKey)
		expect(storedIndex).not.toBeNull()
		expect(Number(storedIndex)).toBeGreaterThanOrEqual(0)
		expect(Number(storedIndex)).toBeLessThan(items.length)
	})

	it('should return an index', () => {
		const result = selectRandomItem(items, storageKey)
		expect(typeof result).toBe('number')
	})

	it('should work with an empty localStorage (defaults to index 0)', () => {
		// With no stored value, lastIndex defaults to 0, so result should not be items[0]
		const result = selectRandomItem(items, storageKey)
		expect(result).not.toBe(items[0])
	})
})
