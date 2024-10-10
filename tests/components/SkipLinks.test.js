import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SkipLinks from '@/components/layout/SkipLinks.vue'

describe('<SkipLinks>', () => {
  it('should render with default props', () => {
    const wrapper = mount(SkipLinks)
    expect(wrapper.attributes('id')).toBe('access-shortcuts-wrapper-top')
    expect(wrapper.attributes('aria-label')).toBe('Accès rapide (haut de page)')
  })

  it('should render with bottom position', () => {
    const wrapper = mount(SkipLinks, {
      props: {
        position: 'bottom'
      }
    })
    expect(wrapper.attributes('id')).toBe('access-shortcuts-wrapper-bottom')
    expect(wrapper.attributes('aria-label')).toBe('Accès rapide (bas de page)')
  })

  it('should render two skip links', () => {
    const wrapper = mount(SkipLinks)
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
  })

  it('should have correct attributes for content link', () => {
    const wrapper = mount(SkipLinks)
    const contentLink = wrapper.find('a[href="#content"]')
    expect(contentLink.exists()).toBe(true)
    expect(contentLink.text()).toBe('Aller au contenu')
    expect(contentLink.attributes('id')).toBe('skiplink-go-to-content-from-top')
  })

  it('should have correct attributes for menu link', () => {
    const wrapper = mount(SkipLinks)
    const menuLink = wrapper.find('a[href="#menu"]')
    expect(menuLink.exists()).toBe(true)
    expect(menuLink.text()).toBe('Aller au menu')
    expect(menuLink.attributes('id')).toBe('skiplink-go-to-menu-from-top')
  })

  it('should apply correct CSS classes to links', () => {
    const wrapper = mount(SkipLinks)
    const links = wrapper.findAll('a')
    links.forEach(link => {
      expect(link.classes()).toContain('visually-hidden')
      expect(link.classes()).toContain('visually-hidden-focusable')
    })
  })

  it('should have correct CSS class on nav element', () => {
    const wrapper = mount(SkipLinks)
    expect(wrapper.classes()).toContain('skip-link')
  })
})
