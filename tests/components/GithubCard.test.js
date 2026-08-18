import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import GithubCards from '@/components/GithubCards.vue'
import { github } from '@/config'

describe('GithubCards', () => {
	let wrapper

	const createWrapper = (props = {}) => {
		return mount(GithubCards, {
			props: {
				align: 'center',
				...props
			}
		})
	}

	beforeEach(() => {
		wrapper = createWrapper()
	})

	it('should render the component', () => {
		expect(wrapper.find('.github-card').exists()).toBe(true)
	})

	it('should apply correct alignment class', () => {
		expect(wrapper.classes()).toContain('card-center')

		wrapper = createWrapper({ align: 'left' })
		expect(wrapper.classes()).toContain('card-left')
	})

	it('should render stats card when type is stats', () => {
		wrapper = createWrapper({ type: 'stats' })
		const statsImg = wrapper.find('img[alt="Github stats"]')
		expect(statsImg.exists()).toBe(true)
		expect(statsImg.attributes('src')).toBe(github.stats)
	})

	it('should render languages card when type is languages', () => {
		wrapper = createWrapper({ type: 'languages' })
		const languagesImg = wrapper.find('img[alt="Github languages"]')
		expect(languagesImg.exists()).toBe(true)
		expect(languagesImg.attributes('src')).toBe(github.languages)
	})

	it('should not render stats card when type is languages', () => {
		wrapper = createWrapper({ type: 'languages' })
		expect(wrapper.find('img[alt="Github stats"]').exists()).toBe(false)
	})

	it('should not render languages card when type is stats', () => {
		wrapper = createWrapper({ type: 'stats' })
		expect(wrapper.find('img[alt="Github languages"]').exists()).toBe(false)
	})

	it('should use default props when not provided', () => {
		wrapper = mount(GithubCards)
		expect(wrapper.classes()).toContain('card-center')
		expect(wrapper.find('img[alt="Github stats"]').exists()).toBe(true)
		expect(wrapper.find('img[alt="Github languages"]').exists()).toBe(false)
	})
})
