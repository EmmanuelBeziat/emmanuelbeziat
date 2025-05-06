import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Header from '@/components/global/Header.vue'
import Picture from '@/components/global/Picture.vue'
import SocialLinks from '@/components/global/Social.vue'
import Copyright from '@/components/global/Copyright.vue'

// Mock child components
vi.mock('@/components/global/Picture.vue', () => ({
	default: { template: '<div class="picture-mock"></div>' }
}))
vi.mock('@/components/global/Social.vue', () => ({
	default: { template: '<div class="social-mock"></div>' }
}))
vi.mock('@/components/global/Copyright.vue', () => ({
	default: { template: '<div class="copyright-mock"></div>' }
}))

// Create a mock router
const mockRouter = {
	push: vi.fn(),
	replace: vi.fn(),
	go: vi.fn(),
	back: vi.fn(),
	forward: vi.fn()
}

// Create mock components
const mockComponents = {
	RouterLink: {
		name: 'RouterLink',
		props: ['to'],
		template: '<a :href="to"><slot></slot></a>'
	}
}

describe('<Header>', () => {
	const mountHeader = () => {
		return mount(Header, {
			global: {
				mocks: {
					$router: mockRouter
				},
				components: mockComponents
			}
		})
	}

	it('should render the header element', () => {
		const wrapper = mountHeader()
		expect(wrapper.find('header').exists()).toBe(true)
		expect(wrapper.classes()).toContain('header')
	})

	it('should render the title with a router-link', () => {
		const wrapper = mountHeader()
		const title = wrapper.find('.title')
		expect(title.exists()).toBe(true)
		const link = title.find('a')
		expect(link.exists()).toBe(true)
		expect(link.attributes('href')).toBe('/')
		expect(link.text()).toBe('Emmanuel Béziat')
	})

	it('should render the Picture component', () => {
		const wrapper = mountHeader()
		expect(wrapper.findComponent(Picture).exists()).toBe(true)
	})

	it('should render the SocialLinks component', () => {
		const wrapper = mountHeader()
		expect(wrapper.findComponent(SocialLinks).exists()).toBe(true)
	})

	it('should render the bio section', () => {
		const wrapper = mountHeader()
		const bio = wrapper.find('.bio')
		expect(bio.exists()).toBe(true)
		expect(bio.findAll('p')).toHaveLength(3)
	})

	it('should render the Copyright component', () => {
		const wrapper = mountHeader()
		expect(wrapper.findComponent(Copyright).exists()).toBe(true)
	})

	it('should have correct CSS classes for animations', () => {
		const wrapper = mountHeader()
		expect(wrapper.find('.title').classes()).toContain('animation-skew-y')
		expect(wrapper.find('.picture').classes()).toContain('animation-bounce')
		expect(wrapper.find('.social').classes()).toContain('animation-bounce')
		expect(wrapper.find('.bio').classes()).toContain('animation-bounce')
		expect(wrapper.find('.copyright').classes()).toContain('animation-bounce')
	})

	it('should render emoji with correct accessibility attributes', () => {
		const wrapper = mountHeader()
		const emoji = wrapper.find('.emoji')
		expect(emoji.exists()).toBe(true)
		expect(emoji.attributes('role')).toBe('img')
		expect(emoji.attributes('aria-label')).toBe('Emoji de salut militaire')
	})
})
