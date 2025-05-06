import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Menu from '@/components/global/Menu.vue'
import MenuItem from '@/components/global/MenuItem.vue'

// Mock MenuItem component
vi.mock('@/components/global/MenuItem.vue', () => ({
	default: {
		name: 'MenuItem',
		props: ['to', 'label', 'icon'],
		template: '<div class="menu-item-mock">{{ label }}</div>'
	}
}))

describe('<Menu>', () => {
	it('should render the nav element with correct attributes', () => {
		const wrapper = mount(Menu)
		const nav = wrapper.find('nav')

		expect(nav.exists()).toBe(true)
		expect(nav.attributes('id')).toBe('menu')
		expect(nav.attributes('aria-label')).toBe('Navigation principale')
		expect(nav.classes()).toContain('menu')
		expect(nav.classes()).toContain('animation-bounce')
	})

	it('should render the correct number of MenuItem components', () => {
		const wrapper = mount(Menu)
		const menuItems = wrapper.findAllComponents(MenuItem)

		expect(menuItems).toHaveLength(5)
	})

	it('should pass correct props to MenuItem components', () => {
		const wrapper = mount(Menu)
		const menuItems = wrapper.findAllComponents(MenuItem)

		const expectedItems = [
			{ name: 'Home', label: 'Accueil', icon: 'home' },
			{ name: 'Portfolio', label: 'Portfolio', icon: 'portfolio' },
			{ name: 'Projects', label: 'Projets', icon: 'projects' },
			{ name: 'Blog', label: 'Blog', icon: 'blog' },
			{ name: 'Me', label: 'À propos', icon: 'about' }
		]

		menuItems.forEach((item, index) => {
			expect(item.props('to')).toEqual({ name: expectedItems[index].name })
			expect(item.props('label')).toBe(expectedItems[index].label)
			expect(item.props('icon')).toBe(expectedItems[index].icon)
		})
	})

	it('should have correct CSS classes', () => {
		const wrapper = mount(Menu)
		expect(wrapper.classes()).toContain('menu')
		expect(wrapper.classes()).toContain('animation-bounce')
	})
})
