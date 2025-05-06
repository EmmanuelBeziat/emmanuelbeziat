import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Social from '@/components/global/Social.vue'
import SocialItem from '@/components/global/SocialItem.vue'

// Mock the config
vi.mock('@/config', () => ({
	social: {
		twitter: 'https://twitter.com/example',
		instagram: 'https://instagram.com/example',
		npmjs: 'https://npmjs.com/example',
		github: 'https://github.com/example',
		linkedin: 'https://linkedin.com/example'
	}
}))

// Mock the SocialItem component
vi.mock('@/components/global/SocialItem.vue', () => ({
	default: {
		name: 'SocialItem',
		props: ['url', 'name', 'icon'],
		template: '<div class="social-item-mock">{{ name }}</div>'
	}
}))

describe('<Social>', () => {
	it('should render the correct number of SocialItem components', () => {
		const wrapper = mount(Social)
		const socialItems = wrapper.findAllComponents(SocialItem)
		expect(socialItems).toHaveLength(5) // Adjust this number if you change the number of items
	})

	it('should pass correct props to SocialItem components', () => {
		const wrapper = mount(Social)
		const socialItems = wrapper.findAllComponents(SocialItem)

		const expectedItems = [
			{ name: 'Bluesky', icon: 'bluesky' },
			{ name: 'Instagram', icon: 'instagram' },
			{ name: 'NPMJS', icon: 'npmjs' },
			{ name: 'GitHub', icon: 'github' },
			{ name: 'LinkedIn', icon: 'linkedin' }
		]

		socialItems.forEach((item, index) => {
			expect(item.props('name')).toBe(expectedItems[index].name)
			expect(item.props('icon')).toBe(expectedItems[index].icon)
		})
	})

	it('should have the correct CSS class', () => {
		const wrapper = mount(Social)
		expect(wrapper.classes()).toContain('social')
		expect(wrapper.classes()).toContain('animation-skew-y')
	})
})
