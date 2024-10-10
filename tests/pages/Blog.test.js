import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import BlogIndex from '@/views/blog/Index.vue'
import { usePostsStore } from '@/stores/posts'
import { useRoute } from 'vue-router'
import { defineNamespace } from '@/plugins/mixins/namespace'
import Search from '@/components/search/Search.vue'
import Post from '@/components/Post.vue'
import NoContent from '@/components/loader/NoContent.vue'

// Mock the vue-router
vi.mock('vue-router', () => ({
  useRoute: vi.fn()
}))

// Mock the @unhead/vue
vi.mock('@unhead/vue', () => ({
  useHead: vi.fn(),
  useSeoMeta: vi.fn()
}))

// Mock the defineNamespace function
vi.mock('@/plugins/mixins/namespace', () => ({
  defineNamespace: vi.fn()
}))

// Mock the usePostsStore
vi.mock('@/stores/posts', () => ({
  usePostsStore: vi.fn()
}))

// Mock child components
vi.mock('@/components/search/Search.vue', () => ({ default: { template: '<div class="search-mock"></div>' } }))
vi.mock('@/components/Post.vue', () => ({ default: { template: '<div class="post-mock"></div>', props: ['post'] } }))
vi.mock('@/components/loader/NoContent.vue', () => ({ default: { template: '<div class="no-content-mock"></div>' } }))

describe('BlogIndex', () => {
  let wrapper
  let mockPostsStore

  beforeEach(() => {
    // Mock route
    useRoute.mockReturnValue({ fullPath: '/blog' })

    // Mock posts store
    mockPostsStore = {
      list: [
        { slug: 'post-1', title: 'Post 1' },
        { slug: 'post-2', title: 'Post 2' }
      ]
    }
    usePostsStore.mockReturnValue(mockPostsStore)

    wrapper = mount(BlogIndex, {
      global: {
        stubs: ['sequential-entrance']
      }
    })
  })

  it('should render the component', () => {
    expect(wrapper.find('.blog').exists()).toBe(true)
  })

  it('should render the Search component', () => {
    expect(wrapper.findComponent(Search).exists()).toBe(true)
  })

  /* it('should render Post components for each post', () => {
    const posts = wrapper.findAllComponents(Post)
    expect(posts).toHaveLength(2)
  }) */

  /* it('should filter posts based on search terms', async () => {
    await wrapper.setData({ searchTerms: 'Post 1' })
    await nextTick()
    const posts = wrapper.findAllComponents(Post)
    expect(posts).toHaveLength(1)
  }) */

  /* it('should render NoContent when no posts match search', async () => {
    await wrapper.setData({ searchTerms: 'Non-existent Post' })
    await nextTick()
    expect(wrapper.findComponent(NoContent).exists()).toBe(true)
  }) */

  it('should call defineNamespace on mount', async () => {
    await nextTick()
    expect(defineNamespace).toHaveBeenCalledWith('blog')
  })
})
