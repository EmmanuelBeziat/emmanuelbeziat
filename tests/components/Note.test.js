import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Note from '@/components/Note.vue'

describe('<Note>', () => {
	let consoleWarnSpy

	beforeEach(() => {
		consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
	})

	afterEach(() => {
		consoleWarnSpy.mockRestore()
	})

	it('should render with default info type', () => {
		const wrapper = mount(Note, {
			slots: { default: 'Info message' }
		})

		expect(wrapper.classes()).toContain('--info')
		expect(wrapper.text()).toBe('Info message')
	})

	it('should apply correct class for each valid type', () => {
		const validTypes = ['info', 'success', 'question', 'important', 'alert']

		validTypes.forEach(type => {
			const wrapper = mount(Note, {
				props: { type },
				slots: { default: 'Message' }
			})

			expect(wrapper.classes()).toContain(`--${type}`)
		})
	})

	it('should warn when an invalid type is provided', () => {
		mount(Note, {
			props: { type: 'invalid' },
			slots: { default: 'Message' }
		})

		expect(consoleWarnSpy).toHaveBeenCalled()
	})

	it('should still render with invalid type class when prop validation fails', () => {
		const wrapper = mount(Note, {
			props: { type: 'invalid' },
			slots: { default: 'Message' }
		})

		expect(wrapper.classes()).toContain('--invalid')
	})
})
