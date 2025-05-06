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
				cards: {
					stats: true,
					languages: true
				},
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

	it('should render stats card when stats is true', () => {
		const statsImg = wrapper.find('img[alt="github stats"]')
		expect(statsImg.exists()).toBe(true)
		expect(statsImg.attributes('src')).toBe(github.stats)
	})

	it('should render languages card when languages is true', () => {
		const languagesImg = wrapper.find('img[alt="Github stats"]')
		expect(languagesImg.exists()).toBe(true)
		expect(languagesImg.attributes('src')).toBe(github.languages)
	})

	it('should not render stats card when stats is false', () => {
		wrapper = createWrapper({ cards: { stats: false, languages: true } })
		expect(wrapper.find('img[alt="github stats"]').exists()).toBe(false)
	})

	it('should not render languages card when languages is false', () => {
		wrapper = createWrapper({ cards: { stats: true, languages: false } })
		expect(wrapper.find('img[alt="Github stats"]').exists()).toBe(false)
	})

	it('should have lazy loading on images', () => {
		const images = wrapper.findAll('img')
		images.forEach(img => {
			expect(img.attributes('loading')).toBe('lazy')
		})
	})

	it('should use default props when not provided', () => {
		wrapper = mount(GithubCards)
		expect(wrapper.classes()).toContain('card-center')
		expect(wrapper.find('img[alt="github stats"]').exists()).toBe(true)
		expect(wrapper.find('img[alt="Github stats"]').exists()).toBe(true)
	})

	it('should apply correct CSS classes', () => {
		expect(wrapper.classes()).toContain('github-card')
	})
})
