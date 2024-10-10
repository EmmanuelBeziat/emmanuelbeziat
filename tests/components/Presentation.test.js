import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Presentation from '@/components/Presentation.vue'
import FloatingNote from '@/components/FloatingNote.vue'
import Icon from '@/components/icon/Icon.vue'
import { personal } from '@/config'
import dayjs from 'dayjs'

// Mock the FloatingNote and Icon components
vi.mock('@/components/FloatingNote.vue', () => ({
  default: {
    template: '<div><slot /></div>'
  }
}))

vi.mock('@/components/icon/Icon.vue', () => ({
  default: {
    template: '<svg></svg>'
  }
}))

describe('<Presentation>', () => {
  it('should render the correct name and job title', () => {
    const wrapper = mount(Presentation)
    expect(wrapper.find('.presentation__title').text()).toBe('Emmanuel Béziat')
    expect(wrapper.find('.presentation__job').text()).toContain('dev web full-stack')
  })

  it('should calculate the correct age and next birthday', () => {
    const wrapper = mount(Presentation)
    const expectedAge = Math.abs(dayjs(personal.birthday).diff(dayjs(), 'years'))
    const expectedNextBirthday = dayjs(personal.birthday).set('year', dayjs().year()).fromNow()

    expect(wrapper.find('.presentation__age span').text()).toContain(`${expectedAge} ans`)
    expect(wrapper.find('.presentation__age i').text()).toContain(expectedNextBirthday)
  })

  it('should render FloatingNote components with correct props', () => {
    const wrapper = mount(Presentation)
    const floatingNotes = wrapper.findAllComponents(FloatingNote)

    expect(floatingNotes).toHaveLength(2)
  })

  it('should render Icon components', () => {
    const wrapper = mount(Presentation)
    const icons = wrapper.findAllComponents(Icon)

    expect(icons).toHaveLength(2)
  })
})
