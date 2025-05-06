import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Share from '@/components/share/Share.vue'
import Button from '@/components/share/Button.vue'
import Toastify from 'toastify-js'

// Mock Toastify
vi.mock('toastify-js', () => ({
	default: vi.fn(() => ({
		showToast: vi.fn()
	}))
}))

// Mock Button component
vi.mock('@/components/share/Button.vue', () => ({
	default: {
		name: 'Button',
		template: '<button @click="$emit(\'on-click\')"><slot></slot></button>'
	}
}))

describe('<Share>', () => {
	let wrapper

	beforeEach(() => {
		// Mock window.location and document.title
		Object.defineProperty(window, 'location', {
			value: { href: 'https://example.com' },
			writable: true
		})
		Object.defineProperty(document, 'title', {
			value: 'Test Title',
			writable: true
		})

		wrapper = mount(Share)
	})

	it('should render the share component', () => {
		expect(wrapper.find('.share').exists()).toBe(true)
		expect(wrapper.find('.visually-hidden').text()).toBe('Partager cet article :')
		expect(wrapper.findComponent(Button).exists()).toBe(true)
	})

	it('should call navigator.share when available', async () => {
		const mockShare = vi.fn()
		const mockCanShare = vi.fn(() => true)
		Object.defineProperty(navigator, 'share', { value: mockShare, configurable: true })
		Object.defineProperty(navigator, 'canShare', { value: mockCanShare, configurable: true })

		await wrapper.findComponent(Button).trigger('click')

		expect(mockCanShare).toHaveBeenCalled()
		expect(mockShare).toHaveBeenCalledWith({
			title: 'Via &emmanuelBeziat',
			text: 'Test%20Title',
			url: 'https://example.com'
		})
	})

	it('should copy to clipboard when navigator.share is not available', async () => {
		const mockWriteText = vi.fn()
		Object.defineProperty(navigator, 'clipboard', {
			value: { writeText: mockWriteText },
			configurable: true
		})
		Object.defineProperty(navigator, 'share', { value: undefined, configurable: true })

		await wrapper.findComponent(Button).trigger('click')

		expect(mockWriteText).toHaveBeenCalledWith('https://example.com')
		expect(Toastify).toHaveBeenCalledWith(expect.objectContaining({
			text: 'URL "https://example.com" copiée dans le presse papier'
		}))
	})

	it('should show error toast when clipboard API is not available', async () => {
		Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true })
		Object.defineProperty(navigator, 'share', { value: undefined, configurable: true })

		await wrapper.findComponent(Button).trigger('click')

		expect(Toastify).toHaveBeenCalledWith(expect.objectContaining({
			text: 'L’API clipboard n’est pas compatible avec votre navigateur'
		}))
	})
})
