import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Loader from '@/components/loader/Loader.vue'
import Icon from '@/components/Icon.vue'

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
  default: {
    name: 'Icon',
    props: ['name'],
    template: '<div class="icon-mock">{{ name }}</div>'
  }
}))

describe('<Loader>', () => {
  it('should render full loader when mini prop is false', () => {
    const wrapper = mount(Loader)
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('Chargement en cours')
    expect(wrapper.find('p').exists()).toBe(true)
    expect(wrapper.find('p').text()).toBe('Alors assieds-toi et tais-toi !')
    expect(wrapper.findComponent(Icon).exists()).toBe(true)
    expect(wrapper.findComponent(Icon).props('name')).toBe('loader')
  })

  it('should render mini loader when mini prop is true', () => {
    const wrapper = mount(Loader, {
      props: {
        mini: true
      }
    })
    expect(wrapper.find('h2').exists()).toBe(false)
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.findComponent(Icon).exists()).toBe(true)
    expect(wrapper.findComponent(Icon).props('name')).toBe('loader')
  })

  it('should have correct CSS class', () => {
    const wrapper = mount(Loader)
    expect(wrapper.classes()).toContain('loader')
  })
})
