import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Article from '@/components/layouts/Article.vue'

describe('<Article>', () => {
	const createWrapper = (props = {}, slots = {}) => {
		return mount(Article, {
			props,
			slots,
			global: {
				stubs: ['sequential-entrance']
			}
		})
	}

	it('should render the title slot', () => {
		const wrapper = createWrapper({}, {
			title: 'Article title'
		})

		expect(wrapper.find('.title').text()).toBe('Article title')
	})

	it('should render date slot when provided', () => {
		const wrapper = createWrapper({}, {
			date: 'Posté le 15 juin 2023'
		})

		expect(wrapper.find('.date').text()).toBe('Posté le 15 juin 2023')
	})

	it('should not render date section when slot is absent', () => {
		const wrapper = createWrapper({}, {})

		expect(wrapper.find('.date').exists()).toBe(true)
		expect(wrapper.find('.date').text()).toBe('')
	})

	it('should render tags slot when provided', () => {
		const wrapper = createWrapper({}, {
			tags: '<span class="tag">tag1</span>'
		})

		expect(wrapper.find('.infos').html()).toContain('tag1')
	})

	it('should render clients slot when provided', () => {
		const wrapper = createWrapper({}, {
			clients: '<span class="client">client1</span>'
		})

		expect(wrapper.find('.infos').html()).toContain('client1')
	})

	it('should render share slot when provided', () => {
		const wrapper = createWrapper({}, {
			share: '<button>Share</button>'
		})

		expect(wrapper.find('.infos').html()).toContain('Share')
	})

	it('should render note and content slots', () => {
		const wrapper = createWrapper({}, {
			note: '<div class="note">Warning</div>',
			content: '<p>Content</p>'
		})

		expect(wrapper.find('.content').html()).toContain('Warning')
		expect(wrapper.find('.content').html()).toContain('<p>Content</p>')
	})

	it('should render footer infos when showFooterInfos is true', () => {
		const wrapper = createWrapper({ showFooterInfos: true }, {
			tags: '<span class="tag">tag1</span>',
			share: '<button>Share</button>'
		})

		expect(wrapper.find('.footer .infos').exists()).toBe(true)
	})

	it('should not render footer infos when showFooterInfos is false', () => {
		const wrapper = createWrapper({ showFooterInfos: false }, {
			tags: '<span class="tag">tag1</span>',
			share: '<button>Share</button>'
		})

		expect(wrapper.find('.footer .infos').exists()).toBe(false)
	})

	it('should render footer slot', () => {
		const wrapper = createWrapper({}, {
			footer: '<nav>Footer nav</nav>'
		})

		expect(wrapper.find('.footer').text()).toContain('Footer nav')
	})
})
