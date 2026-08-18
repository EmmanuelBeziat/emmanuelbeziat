import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick, reactive, unref } from 'vue'
import PortfolioSingle from '@/views/portfolio/Single.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { defineNamespace } from '@/utilities/namespace'
import Tag from '@/components/Tag.vue'
import Navigation from '@/components/BackToPage.vue'

// Mocks
vi.mock('vue-router', () => ({ useRoute: vi.fn() }))
vi.mock('@unhead/vue', () => ({ useHead: vi.fn(), useSeoMeta: vi.fn() }))
vi.mock('@/utilities/namespace', () => ({ defineNamespace: vi.fn() }))
vi.mock('@/stores/portfolio', () => ({ usePortfolioStore: vi.fn() }))

// Mock child components
vi.mock('@/components/Tag.vue', () => ({ default: { template: '<div class="tag-mock"></div>', props: ['value'] } }))
vi.mock('@/components/BackToPage.vue', () => ({ default: { template: '<div class="navigation-mock"></div>', props: ['type', 'to', 'label'] } }))
vi.mock('@/views/NotFound.vue', () => ({ default: { template: '<div class="not-found">Not Found</div>' } }))
vi.mock('@/components/loader/Loader.vue', () => ({ default: { template: '<div class="loader-mock"></div>' } }))
vi.mock('@/components/layouts/Article.vue', () => ({
	default: {
		template: `
			<article class="post">
				<header class="header">
					<h1 class="title"><slot name="title" /></h1>
				</header>
				<div class="content">
					<slot name="content" />
				</div>
				<footer class="footer">
					<slot name="tags" />
					<slot name="clients" />
					<slot name="footer" />
				</footer>
			</article>
		`,
		props: ['showFooterInfos'],
		slots: {
			tags: true,
			clients: true,
			footer: true
		}
	}
}))

describe('PortfolioSingle', () => {
	let wrapper
	let mockPortfolioStore

	const mockReference = {
		slug: 'test-reference',
		title: 'Test Reference',
		tags: ['tag1', 'tag2'],
		clients: ['client1', 'client2'],
		markup: '<p>Test content</p>'
	}

	beforeEach(() => {
		vi.clearAllMocks()
		useRoute.mockReturnValue({ fullPath: '/portfolio/test-reference' })

		mockPortfolioStore = reactive({
			loaded: true,
			getRef: vi.fn().mockReturnValue(mockReference)
		})
		usePortfolioStore.mockReturnValue(mockPortfolioStore)

		wrapper = mount(PortfolioSingle, {
			props: {
				slug: 'test-reference'
			},
			global: {
				stubs: ['sequential-entrance']
			}
		})
	})

	it('should render the component when reference exists', () => {
		expect(wrapper.find('.post').exists()).toBe(true)
	})

	it('should render the reference title', () => {
		expect(wrapper.find('.title').text()).toBe('Test Reference')
	})

	it('should render tags', () => {
		// Test that the reference data contains the expected tags and clients
		expect(mockReference.tags).toHaveLength(2)
		expect(mockReference.tags).toContain('tag1')
		expect(mockReference.tags).toContain('tag2')
		expect(mockReference.clients).toHaveLength(2)
		expect(mockReference.clients).toContain('client1')
		expect(mockReference.clients).toContain('client2')

		// Test that the store method is called with the correct slug
		expect(mockPortfolioStore.getRef).toHaveBeenCalledWith('test-reference')
	})

	it('should render reference content', () => {
		expect(wrapper.find('.content').html()).toContain('<p>Test content</p>')
	})

	it('should render Navigation component', () => {
		const navigation = wrapper.findComponent(Navigation)
		expect(navigation.exists()).toBe(true)
		expect(navigation.props('type')).toBe('previous')
		expect(navigation.props('to')).toEqual({ name: 'Portfolio' })
		expect(navigation.props('label')).toBe('Revenir au portfolio')
	})

	it('should call defineNamespace on mount', async () => {
		await nextTick()
		expect(defineNamespace).toHaveBeenCalledWith('portfolio')
	})

	it('should set correct head metadata', async () => {
		await nextTick()

		const { title } = useHead.mock.calls.at(-1)[0]
		expect(unref(title)).toBe('Test Reference — Portfolio')

		const meta = useSeoMeta.mock.calls.at(-1)[0]
		expect(unref(meta.ogTitle)).toBe('Test Reference — Portfolio')
		expect(unref(meta.ogUrl)).toContain('/portfolio/test-reference')
	})

	it('should not render when reference does not exist', async () => {
		mockPortfolioStore.getRef.mockReturnValue(null)
		await wrapper.setProps({ slug: 'non-existent-reference' })
		await nextTick()
		expect(wrapper.find('.post').exists()).toBe(false)
		expect(wrapper.find('.not-found').exists()).toBe(true)
	})

	it('should show the loader, not a 404, while the store has not settled', () => {
		const pendingStore = reactive({ loaded: false, getRef: vi.fn().mockReturnValue(undefined) })
		usePortfolioStore.mockReturnValue(pendingStore)

		const pending = mount(PortfolioSingle, {
			props: { slug: 'test-reference' },
			global: { stubs: ['sequential-entrance'] }
		})

		expect(pending.find('.loader-mock').exists()).toBe(true)
		expect(pending.find('.not-found').exists()).toBe(false)
		expect(pending.find('.post').exists()).toBe(false)
	})

	it('should update the head title once the reference resolves after mount', async () => {
		const pendingStore = reactive({
			loaded: false,
			portfolio: [],
			getRef (slug) {
				return this.portfolio.find(ref => ref.slug === slug)
			}
		})
		usePortfolioStore.mockReturnValue(pendingStore)

		mount(PortfolioSingle, {
			props: { slug: 'test-reference' },
			global: { stubs: ['sequential-entrance'] }
		})

		const { title } = useHead.mock.calls.at(-1)[0]
		expect(unref(title)).toBe('Portfolio')

		pendingStore.portfolio.push(mockReference)
		pendingStore.loaded = true
		await nextTick()

		expect(unref(title)).toBe('Test Reference — Portfolio')
	})
})
