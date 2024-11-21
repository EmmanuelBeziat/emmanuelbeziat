import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'
import Search from '@/components/Search.vue'

// Mock mobile-device-detect
vi.mock('mobile-device-detect', () => ({
  isMobile: false
}))

describe('<Search>', () => {
  let wrapper
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  const createWrapper = (props = {}) => {
    return mount(Search, {
      props: {
        label: 'Search label',
        placeholder: 'Search placeholder',
        ...props
      },
      attachTo: container
    })
  }

  it('should render the search input', () => {
    wrapper = createWrapper()
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('search')
    expect(input.attributes('aria-label')).toBe('Search label')
    expect(input.attributes('placeholder')).toBe('Search placeholder')
  })

  it('should emit update:modelValue event on input', async () => {
    wrapper = createWrapper()
    const input = wrapper.find('input')
    await input.setValue('test search')

    // Wait for the debounce
    await new Promise(resolve => setTimeout(resolve, 200))

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['test search'])
  })

  /* it('should apply focus directive on non-mobile devices', async () => {
    const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')

    createWrapper()
    await nextTick()

    expect(focusSpy).toHaveBeenCalled()
  }) */

  it('should not apply focus directive on mobile devices', async () => {
    // Mock isMobile as true
    vi.mock('mobile-device-detect', () => ({
      isMobile: true
    }), { virtual: true })

    const focusSpy = vi.spyOn(HTMLElement.prototype, 'focus')

    createWrapper()
    await nextTick()

    expect(focusSpy).not.toHaveBeenCalled()
  })

  it('should have correct CSS class', () => {
    wrapper = createWrapper()
    expect(wrapper.classes()).toContain('search')
  })

  it('should apply scoped styles to input', () => {
    wrapper = createWrapper()
    const input = wrapper.find('input')
    expect(input.classes()).toContain('search-field')
  })
})
