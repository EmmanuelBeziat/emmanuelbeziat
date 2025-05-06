import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Tag from '@/components/Tag.vue'
import Icon from '@/components/Icon.vue'

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
	default: {
		name: 'Icon',
		props: ['name'],
		template: '<div class="icon-mock">{{ name }}</div>'
	}
}))

describe('<Tag>', () => {
	const createWrapper = (props = {}) => {
		return mount(Tag, { props })
	}

	it('should render the tag with correct value', () => {
		const wrapper = createWrapper({ value: 'Test Tag' })
		expect(wrapper.text()).toContain('Test Tag')
	})

	it('should render numeric values', () => {
		const wrapper = createWrapper({ value: 42 })
		expect(wrapper.text()).toContain('42')
	})

	it('should not render an icon when icon prop is not provided', () => {
		const wrapper = createWrapper({ value: 'No Icon' })
		expect(wrapper.findComponent(Icon).exists()).toBe(false)
	})

	it('should render star icon when icon prop is "star"', () => {
		const wrapper = createWrapper({ value: 'Star', icon: 'star' })
		const icon = wrapper.findComponent(Icon)
		expect(icon.exists()).toBe(true)
		expect(icon.props('name')).toBe('star')
	})

	it('should render fork icon when icon prop is "fork"', () => {
		const wrapper = createWrapper({ value: 'Fork', icon: 'fork' })
		const icon = wrapper.findComponent(Icon)
		expect(icon.exists()).toBe(true)
		expect(icon.props('name')).toBe('fork')
	})

	it('should not render an icon for unknown icon prop values', () => {
		const wrapper = createWrapper({ value: 'Unknown', icon: 'unknown' })
		expect(wrapper.findComponent(Icon).exists()).toBe(false)
	})

	it('should have correct CSS class', () => {
		const wrapper = createWrapper({ value: 'Test' })
		expect(wrapper.classes()).toContain('tag')
	})
})
