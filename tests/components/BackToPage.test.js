import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import BackToPage from '@/components/BackToPage.vue'
import Icon from '@/components/Icon.vue'

// Mock the RouterLink component
const RouterLinkStub = {
  name: 'RouterLink',
  template: '<a><slot></slot></a>',
  props: ['to']
}

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
  default: {
    name: 'Icon',
    props: ['name'],
    template: '<div class="icon-mock">{{ name }}</div>'
  }
}))

describe('<BackToPage>', () => {
  const defaultProps = {
    to: '/back',
    type: 'previous',
    label: 'Go Back'
  }

  const createWrapper = (props = {}) => {
    return mount(BackToPage, {
      props: { ...defaultProps, ...props },
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it('should render Icon component', () => {
    const wrapper = createWrapper()
    const icon = wrapper.findComponent(Icon)
    expect(icon.exists()).toBe(true)
    expect(icon.props('name')).toBe('back')
  })

  it('should render label when provided', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain('Go Back')
  })

  it('should not render label when not provided', () => {
    const wrapper = createWrapper({ label: undefined })
    expect(wrapper.text()).not.toContain('Go Back')
  })

  it('should apply correct CSS class based on type prop', () => {
    const wrapper = createWrapper()
    expect(wrapper.classes()).toContain('navigation')
    expect(wrapper.classes()).toContain('--previous')

    const nextWrapper = createWrapper({ type: 'next' })
    expect(nextWrapper.classes()).toContain('--next')
  })
})
