import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Reference from '@/components/Reference.vue'
import Icon from '@/components/icon/Icon.vue'

// Mock the Icon component
vi.mock('@/components/icon/Icon.vue', () => ({
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
    expect(wrapper.find('.showcase__item').exists()).toBe(true)
  })

	it('should handle references without tags', () => {
    const wrapper = createWrapper({ tags: [] })
    const tags = wrapper.findAll('.showcase-tags__item')
    expect(tags).toHaveLength(0)
  })

	/*
	it('should render the showcase layer with correct class and content', () => {
    const wrapper = createWrapper()
    const layer = wrapper.find('.showcase__layer')
    expect(layer.classes()).toContain('blue')
    expect(layer.html()).toContain('<svg>Mock SVG</svg>')
  })

  it('should render the Icon component', () => {
    const wrapper = createWrapper()
    const icon = wrapper.findComponent(Icon)
    expect(icon.exists()).toBe(true)
    expect(icon.props('name')).toBe('tags')
    expect(icon.props('width')).toBe('1em')
  })

  it('should render all tags', () => {
    const wrapper = createWrapper()
    const tags = wrapper.findAll('.showcase-tags__item')
    expect(tags).toHaveLength(3)
    expect(tags[0].text()).toBe('tag1')
    expect(tags[1].text()).toBe('tag2')
    expect(tags[2].text()).toBe('tag3')
  })
	*/
})
