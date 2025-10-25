import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Picture from '@/components/global/Picture.vue'
import { useRoute } from 'vue-router'
import { nextTick } from 'vue'

// Mock vue-router
vi.mock('vue-router', () => ({
	useRoute: vi.fn(() => ({
		name: 'Home'
	}))
}))

// Mock URL constructor
global.URL = class MockURL {
	constructor(url) {
		this.href = url
	}
}

describe('<Picture>', () => {
	it('should render the main picture', () => {
		const wrapper = mount(Picture)
		const picture = wrapper.find('picture')
		const img = wrapper.find('img[alt="Emmanuel Béziat"]')

		expect(picture.exists()).toBe(true)
		expect(img.exists()).toBe(true)
		expect(img.attributes('width')).toBe('220')
		expect(img.attributes('height')).toBe('220')
	})

	it('should compute correct image sources', () => {
		const wrapper = mount(Picture)

		expect(wrapper.vm.pictureAvif).toBeDefined()
		expect(wrapper.vm.pictureAvif).toContain('emmanuelb.avif')
		expect(wrapper.vm.pictureWebp).toBeDefined()
		expect(wrapper.vm.pictureWebp).toContain('emmanuelb.webp')
	})

	it('should use error image when route is NotFound', async () => {
		useRoute.mockReturnValue({ name: 'NotFound' })
		const wrapper = mount(Picture)

		expect(wrapper.vm.pictureAvif).toBeDefined()
		expect(wrapper.vm.pictureAvif).toContain('emmanuelb-error.avif')
		expect(wrapper.vm.pictureWebp).toBeDefined()
		expect(wrapper.vm.pictureWebp).toContain('emmanuelb-error.webp')
	})

	it('should show easter egg image after 5 clicks', async () => {
		vi.useFakeTimers()
		const wrapper = mount(Picture)
		const mainImg = wrapper.find('img[alt="Emmanuel Béziat"]')

		for (let i = 0; i < 5; i++) {
			await mainImg.trigger('click')
		}

		await nextTick()
		expect(wrapper.find('img[src$="criquette.avifs"]').exists()).toBe(true)

		vi.advanceTimersByTime(1920)
		await nextTick()
		expect(wrapper.find('img[src$="criquette.avifs"]').exists()).toBe(false)

		vi.useRealTimers()
	})
})
