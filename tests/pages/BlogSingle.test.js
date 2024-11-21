import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import BlogSingle from '@/views/blog/Single.vue'
import { usePostsStore } from '@/stores/posts'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { defineNamespace } from '@/plugins/mixins/namespace'
import Share from '@/components/share/Share.vue'
import Tag from '@/components/Tag.vue'
import { dateFormat } from '@/plugins/mixins/date'

// Mocks
vi.mock('vue-router', () => ({ useRoute: vi.fn() }))
vi.mock('@unhead/vue', () => ({ useHead: vi.fn(), useSeoMeta: vi.fn() }))
vi.mock('@/plugins/mixins/namespace', () => ({ defineNamespace: vi.fn() }))
vi.mock('@/stores/posts', () => ({ usePostsStore: vi.fn() }))
vi.mock('@/plugins/mixins/date', () => ({ dateFormat: vi.fn() }))

// Mock child components
vi.mock('@/components/share/Share.vue', () => ({ default: { template: '<div class="share-mock"></div>' } }))
vi.mock('@/components/Tag.vue', () => ({ default: { template: '<div class="tag-mock"></div>', props: ['value'] } }))

describe('BlogSingle', () => {
  let wrapper
  let mockPostsStore

  const mockPost = {
    slug: 'test-post',
    title: 'Test Post',
    date: '2023-05-20',
    tags: ['tag1', 'tag2'],
    description: 'Test description',
    image: 'test-image.jpg',
    markup: '<p>Test content</p>'
  }

  beforeEach(() => {
    useRoute.mockReturnValue({ fullPath: '/blog/test-post' })

    mockPostsStore = {
      getPost: vi.fn().mockReturnValue(mockPost)
    }
    usePostsStore.mockReturnValue(mockPostsStore)

    dateFormat.mockReturnValue('20 May 2023')

    wrapper = mount(BlogSingle, {
      props: {
        slug: 'test-post'
      },
      global: {
        stubs: ['sequential-entrance']
      }
    })
  })

  it('should render the component when post exists', () => {
    expect(wrapper.find('.post').exists()).toBe(true)
  })

  it('should render the post title', () => {
    expect(wrapper.find('.title').text()).toBe('Test Post')
  })

  it('should render the formatted date', () => {
    expect(wrapper.find('.date').text()).toContain('20 May 2023')
    expect(dateFormat).toHaveBeenCalledWith('2023-05-20', { year: 'numeric', month: 'long', day: 'numeric' })
  })

  /* it('should render tags', () => {
    const tags = wrapper.findAllComponents(Tag)
    expect(tags).toHaveLength(4) // 2 in header, 2 in footer
    expect(tags[0].props('value')).toBe('tag1')
    expect(tags[1].props('value')).toBe('tag2')
  }) */

  /* it('should render Share component', () => {
    const shareComponents = wrapper.findAllComponents(Share)
    expect(shareComponents).toHaveLength(2) // 1 in header, 1 in footer
  }) */

  it('should render post content', () => {
    expect(wrapper.find('.content').html()).toContain('<p>Test content</p>')
  })

  it('should call defineNamespace on mount', async () => {
    await nextTick()
    expect(defineNamespace).toHaveBeenCalledWith('blog')
  })

  it('should update meta tags when post changes', async () => {
    const newPost = { ...mockPost, title: 'New Test Post', description: 'New description' }
    mockPostsStore.getPost.mockReturnValue(newPost)
    await wrapper.setProps({ slug: 'new-test-post' })
    await nextTick()

    expect(useHead).toHaveBeenCalledWith({
      title: 'New Test Post — Blog'
    })

    expect(useSeoMeta).toHaveBeenCalledWith(expect.objectContaining({
      description: 'New description',
      ogTitle: 'New Test Post — Blog',
      ogDescription: 'New description',
    }))
  })

  it('should not render when post does not exist', async () => {
    mockPostsStore.getPost.mockReturnValue(null)
    await wrapper.setProps({ slug: 'non-existent-post' })
    await nextTick()
    expect(wrapper.find('.post').exists()).toBe(false)
  })
})
