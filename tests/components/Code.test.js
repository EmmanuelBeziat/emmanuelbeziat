import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import Code from '@/components/Code.vue'
import { useCodesStore } from '@/stores/codes'
import Loader from '@/components/loader/Loader.vue'

// Mock the useCodesStore
vi.mock('@/stores/codes', () => ({
	useCodesStore: vi.fn()
}))

// Mock the Loader component
vi.mock('@/components/loader/Loader.vue', () => ({
	default: {
		name: 'Loader',
		template: '<div class="loader-mock"></div>'
	}
}))

describe('Code', () => {
	let wrapper
	let mockCodesStore

	beforeEach(() => {
		mockCodesStore = {
			list: [
				{ slug: 'test-code', markup: '<pre><code>Test code</code></pre>' }
			],
			count: 1
		}
		useCodesStore.mockReturnValue(mockCodesStore)

		wrapper = mount(Code)
	})

	it('should render the component', () => {
		expect(wrapper.find('.cv-code').exists()).toBe(true)
	})

	it('should render the code top-bar', () => {
		expect(wrapper.find('.top-bar').exists()).toBe(true)
	})

	it('should render fake buttons', () => {
		expect(wrapper.find('.fake-button.--close').exists()).toBe(true)
		expect(wrapper.find('.fake-button.--minify').exists()).toBe(true)
		expect(wrapper.find('.fake-button.--expand').exists()).toBe(true)
	})

	it('should render the code title when code is available', async () => {
		await nextTick()
		expect(wrapper.find('.title').text()).toBe('emmanuel@code: ~/test-code')
	})

	it('should render the code markup when code is available', async () => {
		await nextTick()
		expect(wrapper.find('.code').html()).toContain('<pre><code>Test code</code></pre>')
	})

	it('should render the Loader when no code is available', async () => {
		mockCodesStore.list = []
		mockCodesStore.count = 0
		await nextTick()
		expect(wrapper.findComponent(Loader).exists())
	})

	it('should randomly select a code from the store', () => {
		const mathRandomSpy = vi.spyOn(Math, 'random')
		mathRandomSpy.mockReturnValue(0.5)

		mount(Code)

		expect(mathRandomSpy).toHaveBeenCalled()
		mathRandomSpy.mockRestore()
	})

	it('should apply correct CSS classes', () => {
		expect(wrapper.classes()).toContain('cv-code')
	})
})
