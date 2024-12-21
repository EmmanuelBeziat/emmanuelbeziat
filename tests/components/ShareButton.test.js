import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Button from '@/components/share/Button.vue'
import Icon from '@/components/Icon.vue'

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
  default: {
    name: 'Icon',
    props: ['name'],
    template: '<div class="icon-mock">{{ name }}</div>'
  }
}))

describe('<Button>', () => {
  const defaultProps = {
    icon: 'share',
    name: 'Share'
  }

  const createWrapper = (props = {}) => {
    return mount(Button, {
      props: { ...defaultProps, ...props }
    })
  }

  it('should render the button with correct class', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.classes()).toContain('share-button')
    expect(wrapper.classes()).toContain('--share')
  })

  it('should render the Icon component', () => {
    const wrapper = createWrapper()
    const icon = wrapper.findComponent(Icon)
    expect(icon.exists()).toBe(true)
    expect(icon.props('name')).toBe('share')
  })

  it('should emit on-click event when clicked', async () => {
    const wrapper = createWrapper()
    await wrapper.trigger('click')
    expect(wrapper.emitted('on-click')).toBeTruthy()
    expect(wrapper.emitted('on-click')[0]).toEqual(['share'])
  })

  it('should apply correct classes based on icon prop', () => {
    const wrapper = createWrapper({ icon: 'custom' })
    expect(wrapper.classes()).toContain('--custom')
  })
})
