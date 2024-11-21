import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import SocialItem from '@/components/global/SocialItem.vue'
import Icon from '@/components/Icon.vue'

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
  default: {
    name: 'Icon',
    props: ['name'],
    template: '<div class="icon-mock">{{ name }}</div>'
  }
}))

describe('<SocialItem>', () => {
  const defaultProps = {
    name: 'Instagram',
    url: 'https://instagram.com/example',
    icon: 'instagram'
  }

  it('should render with correct props', () => {
    const wrapper = mount(SocialItem, { props: defaultProps })
    const link = wrapper.find('a')

    expect(link.attributes('href')).toBe(defaultProps.url)
    expect(link.attributes('aria-label')).toBe(defaultProps.name)
    expect(link.classes()).toContain('--instagram')
  })

  it('should render the Icon component', () => {
    const wrapper = mount(SocialItem, { props: defaultProps })
    const icon = wrapper.findComponent(Icon)

    expect(icon.exists()).toBe(true)
    expect(icon.props('name')).toBe(defaultProps.icon)
  })

  it('should apply correct CSS class based on name prop', () => {
    const socialNetworks = ['X', 'Facebook', 'Instagram', 'GitHub', 'LinkedIn', 'YouTube', 'NPMjs']

    socialNetworks.forEach(network => {
      const wrapper = mount(SocialItem, {
        props: { ...defaultProps, name: network }
      })
      const link = wrapper.find('a')
      expect(link.classes()).toContain(`--${network.toLowerCase()}`)
    })
  })

  it('should handle custom social network names', () => {
    const wrapper = mount(SocialItem, {
      props: { ...defaultProps, name: 'CustomNetwork' }
    })
    const link = wrapper.find('a')
    expect(link.classes()).toContain('--customnetwork')
  })
})
