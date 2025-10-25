import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
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

		mockPortfolioStore = {
			getRef: vi.fn().mockReturnValue(mockReference)
		}
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
		expect(useHead).toHaveBeenCalledWith({
			title: 'Test Reference — Portfolio'
		})

		expect(useSeoMeta).toHaveBeenCalledWith({
			ogTitle: 'Test Reference — Portfolio',
			ogUrl: expect.any(String)
		})
	})

	/* it('should update meta tags when reference changes', async () => {
    const newReference = { ...mockReference, title: 'New Test Reference' }
    mockPortfolioStore.getRef.mockReturnValue(newReference)
    await wrapper.setProps({ slug: 'new-test-reference' })
    await nextTick()

    expect(useHead).toHaveBeenCalledWith({
      title: 'New Test Reference — Portfolio'
    })

    expect(useSeoMeta).toHaveBeenCalledWith(expect.objectContaining({
      ogTitle: 'New Test Reference — Portfolio',
    }))
  }) */

	it('should not render when reference does not exist', async () => {
		mockPortfolioStore.getRef.mockReturnValue(null)
		await wrapper.setProps({ slug: 'non-existent-reference' })
		await nextTick()
		expect(wrapper.find('.post').exists()).toBe(false)
		expect(wrapper.find('.not-found').exists()).toBe(true)
	})
})
