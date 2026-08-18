import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Reference from '@/components/Reference.vue'
import Icon from '@/components/Icon.vue'

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
	default: {
		name: 'Icon',
		template: '<div class="icon-mock"></div>',
		props: ['name']
	}
}))

describe('Reference', () => {
	const mockReference = {
		slug: 'test-reference',
		color: 'blue',
		image: '<svg>Mock SVG</svg>',
		title: 'Test Reference',
		tags: ['tag1', 'tag2', 'tag3']
	}

	const createWrapper = (props = {}) => {
		return mount(Reference, {
			props: {
				reference: { ...mockReference, ...props }
			},
			global: {
				stubs: ['router-link']
			}
		})
	}

	it('should render the component', () => {
		const wrapper = createWrapper()
		expect(wrapper.find('.card').exists()).toBe(true)
	})

	it('should handle references without tags', () => {
		const wrapper = createWrapper({ tags: [] })
		const tags = wrapper.findAll('.tag')
		expect(tags).toHaveLength(0)
	})
})
