import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import AboutIndex from '@/views/about/Index.vue'
import GithubCards from '@/components/GithubCards.vue'
import { useRoute } from 'vue-router'
import { defineNamespace } from '@/utilities/namespace'

// Mock the vue-router
vi.mock('vue-router', () => ({
	useRoute: vi.fn()
}))

// Mock the @unhead/vue
vi.mock('@unhead/vue', () => ({
	useHead: vi.fn(),
	useSeoMeta: vi.fn()
}))

// Mock the defineNamespace function
vi.mock('@/utilities/namespace', () => ({
	defineNamespace: vi.fn()
}))

// Mock the GithubCards component
vi.mock('@/components/GithubCards.vue', () => ({
	default: {
		name: 'GithubCards',
		template: '<div class="github-cards-mock"></div>'
	}
}))

describe('AboutIndex', () => {
	let wrapper

	beforeEach(() => {
		// Mock route
		useRoute.mockReturnValue({ fullPath: '/about' })

		wrapper = mount(AboutIndex)
	})

	it('should render the component', () => {
		expect(wrapper.find('.me').exists()).toBe(true)
	})

	it('should render the drawing section', () => {
		const drawing = wrapper.find('.drawing')
		expect(drawing.exists()).toBe(true)
		expect(drawing.find('picture').exists()).toBe(true)
		expect(drawing.find('img').attributes('alt')).toBe('Emmanuel Béziat (Drawing by Marie-Laure Rouzier)')
	})

	it('should render the interview section', () => {
		const interview = wrapper.find('.interview')
		expect(interview.exists()).toBe(true)
	})

	it('should render the work section with GithubCards', () => {
		const work = wrapper.find('.work')
		expect(work.exists()).toBe(true)
		expect(work.findComponent(GithubCards).exists()).toBe(true)
	})

	it('should call defineNamespace on mount', async () => {
		await nextTick()
		expect(defineNamespace).toHaveBeenCalledWith('me')
	})

	it('should have correct image sources', () => {
		const sources = wrapper.findAll('source')
		expect(sources[0].attributes('type')).toBe('image/avif')
		expect(sources[1].attributes('type')).toBe('image/wepb')
		expect(sources[0].attributes('srcset')).toContain('emmanuelb-draw.avif')
		expect(sources[1].attributes('srcset')).toContain('emmanuelb-draw.webp')
	})

	it('should have correct CSS classes for animations', () => {
		const animatedElements = wrapper.findAll('.animation-bounce')
		expect(animatedElements.length).toBe(3)
		animatedElements.forEach((el, index) => {
			expect(el.classes()).toContain(`animation-bounce`)
		})
	})
})
