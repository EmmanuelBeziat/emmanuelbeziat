import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import PortfolioSingle from '@/views/portfolio/Single.vue'
import { usePortfolioStore } from '@/stores/portfolio'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { defineNamespace } from '@/plugins/mixins/namespace'
import Tag from '@/components/Tag.vue'
import Navigation from '@/components/BackToPage.vue'

// Mocks
vi.mock('vue-router', () => ({ useRoute: vi.fn() }))
vi.mock('@unhead/vue', () => ({ useHead: vi.fn(), useSeoMeta: vi.fn() }))
vi.mock('@/plugins/mixins/namespace', () => ({ defineNamespace: vi.fn() }))
vi.mock('@/stores/portfolio', () => ({ usePortfolioStore: vi.fn() }))

// Mock child components
vi.mock('@/components/Tag.vue', () => ({ default: { template: '<div class="tag-mock"></div>', props: ['value'] } }))
vi.mock('@/components/BackToPage.vue', () => ({ default: { template: '<div class="navigation-mock"></div>', props: ['type', 'to', 'label'] } }))

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

  /* it('should render tags', () => {
    const tags = wrapper.findAllComponents(Tag)
    expect(tags).toHaveLength(4) // 2 tags + 2 clients
    expect(tags[0].props('value')).toBe('tag1')
    expect(tags[1].props('value')).toBe('tag2')
    expect(tags[2].props('value')).toBe('client1')
    expect(tags[3].props('value')).toBe('client2')
  }) */

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
  })
})
