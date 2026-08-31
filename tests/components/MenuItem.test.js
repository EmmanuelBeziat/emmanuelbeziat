import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import MenuItem from '@/components/global/MenuItem.vue'
import Icon from '@/components/Icon.vue'

vi.mock('@/components/Icon.vue', () => ({
	default: {
		name: 'Icon',
		props: ['name'],
		template: '<div class="icon-mock">{{ name }}</div>'
	}
}))

vi.mock('vue-router', () => ({
	useRouter: vi.fn(),
	useRoute: vi.fn(),
	RouterLink: {
		name: 'RouterLink',
		props: ['to'],
		template: '<a :href="to"><slot /></a>'
	}
}))

import { useRouter, useRoute } from 'vue-router'

describe('<MenuItem>', () => {
	const createWrapper = (routePath = '/') => {
		useRouter.mockReturnValue({
			resolve: (to) => {
				const map = {
					Home: '/',
					Blog: '/blog',
					Portfolio: '/portfolio'
				}

				return { path: map[to.name] || '/' }
			}
		})

		useRoute.mockReturnValue({ path: routePath })

		return mount(MenuItem, {
			props: {
				to: { name: 'Blog' },
				label: 'Blog',
				icon: 'blog'
			},
			global: {
				stubs: {
					RouterLink: {
						props: ['to'],
						template: '<a><slot /></a>'
					}
				}
			}
		})
	}

	it('should render the label', () => {
		const wrapper = createWrapper()
		expect(wrapper.text()).toContain('Blog')
	})

	it('should render the Icon component', () => {
		const wrapper = createWrapper()
		const icon = wrapper.findComponent(Icon)

		expect(icon.exists()).toBe(true)
		expect(icon.props('name')).toBe('blog')
	})

	it('should mark link as active when current route matches', () => {
		const wrapper = createWrapper('/blog')
		expect(wrapper.classes()).toContain('--active')
	})

	it('should mark link as active on child route', () => {
		const wrapper = createWrapper('/blog/my-post')
		expect(wrapper.classes()).toContain('--active')
	})

	it('should not mark link as active when current route is different', () => {
		const wrapper = createWrapper('/portfolio')
		expect(wrapper.classes()).not.toContain('--active')
	})

	it('should not mark link as active on home route', () => {
		const wrapper = createWrapper('/')
		expect(wrapper.classes()).not.toContain('--active')
	})
})
