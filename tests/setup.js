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
