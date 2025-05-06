import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import NotFound from '@/views/NotFound.vue'
import { useHead } from '@unhead/vue'
import { selectRandomItem } from '@/plugins/mixins/randomize'

// Mock the useHead composable
vi.mock('@unhead/vue', () => ({
	useHead: vi.fn()
}))

// Mock the selectRandomItem function
vi.mock('@/plugins/mixins/randomize', () => ({
	selectRandomItem: vi.fn()
}))

describe('<NotFound>', () => {
	let wrapper

	beforeEach(() => {
		// Reset mocks
		vi.clearAllMocks()

		// Mock router
		const mockRouter = {
			go: vi.fn()
		}

		// Mock selectRandomItem to return a specific index
		selectRandomItem.mockReturnValue(0)

		wrapper = mount(NotFound, {
			global: {
				mocks: {
					$router: mockRouter
				}
			}
		})
	})

	it('should render the NotFound component', () => {
		expect(wrapper.find('.not-found').exists()).toBe(true)
	})

	it('should set the correct page title', () => {
		expect(useHead).toHaveBeenCalledWith({
			title: 'Erreur !'
		})
	})

	it('should render a random error image and title', async () => {
		await nextTick()
		const image = wrapper.find('.image img')
		const title = wrapper.find('.error')

		expect(image.attributes('src')).toContain('doctor-who.avifs')
		expect(title.html()).toContain('What?!')
	})

	it('should call router.go when image is clicked', async () => {
		const image = wrapper.find('.image')
		await image.trigger('click')
		expect(wrapper.vm.$router.go).toHaveBeenCalled()
	})

	it('should render the main title', () => {
		const mainTitle = wrapper.find('.title')
		expect(mainTitle.text()).toBe('Page introuvable')
	})

	it('should render the content', () => {
		const content = wrapper.find('.message')
		expect(content.text()).toContain('Et voilà, vous avez tout cassé…')
	})

	it('should apply correct CSS classes for animations', () => {
		expect(wrapper.find('.image').classes()).toContain('animation-bounce')
		expect(wrapper.find('.error').classes()).toContain('animation-bounce')
		expect(wrapper.find('.title').classes()).toContain('animation-bounce')
		expect(wrapper.find('.message').classes()).toContain('animation-bounce')
	})
})
