import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Copyright from '@/components/global/Copyright.vue'

// Mock the Date object to ensure consistent test results
const mockDate = new Date(2023, 0, 1) // January 1, 2023
vi.useFakeTimers()
vi.setSystemTime(mockDate)

describe('<Copyright>', () => {
  it('should render the correct year and text', () => {
    const wrapper = mount(Copyright)
    const expectedYear = new Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(mockDate)
    expect(wrapper.text()).toBe(`© ${expectedYear} Emmanuel Béziat`)
  })
})
