import { beforeEach, afterEach, vi } from 'vitest'

let consoleErrorSpy
const originalConsoleError = console.error

beforeEach(() => {
	consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation((...args) => {
		if (typeof args[0] === 'string' && args[0].startsWith('Store error:')) {
			return
		}

		originalConsoleError(...args)
	})
})

afterEach(() => {
	consoleErrorSpy?.mockRestore()
})

// Setup global mocks before any test runs
// Needed because @vue/devtools-kit accesses localStorage during Pinia initialization

const localStorageMock = (() => {
	let store = {}
	return {
		getItem: (key) => store[key] ?? null,
		setItem: (key, value) => { store[key] = String(value) },
		clear: () => { store = {} },
		removeItem: (key) => { delete store[key] },
		key: (index) => Object.keys(store)[index] ?? null,
		get length () { return Object.keys(store).length }
	}
})()

Object.defineProperty(globalThis, 'localStorage', {
	value: localStorageMock,
	writable: true
})

Object.defineProperty(globalThis, 'sessionStorage', {
	value: localStorageMock,
	writable: true
})
