import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { dateFormat } from '@/plugins/mixins/date'
import Post from '@/components/Post.vue'
import Tag from '@/components/Tag.vue'

// Mock the dateFormat function
vi.mock('@/plugins/mixins/date', () => ({
  dateFormat: vi.fn()
}))

// Mock the Tag component
vi.mock('@/components/Tag.vue', () => ({
  default: {
    name: 'Tag',
    template: '<div class="tag-mock">{{ value }}</div>',
    props: ['value']
  }
}))

describe('Post', () => {
  const mockPost = {
    slug: 'test-post',
    title: 'The Post Title',
    date: '2023-05-20',
    tags: ['tag1', 'tag2'],
    description: 'This is a test post description'
  }

  const createWrapper = (props = {}) => {
    return mount(Post, {
      props: {
        post: mockPost,
        ...props
      },
      global: {
        stubs: ['router-link'],
      }
    })
  }

  it('should render the component', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.post').exists()).toBe(true)
  })

  it('should render the formatted date', () => {
    dateFormat.mockReturnValue('20 May 2023')
    const wrapper = createWrapper()
    expect(wrapper.find('.date').text()).toContain('20 May 2023')
    expect(dateFormat).toHaveBeenCalledWith('2023-05-20', { year: 'numeric', month: 'long', day: 'numeric' })
  })

  it('should render tags', () => {
    const wrapper = createWrapper()
    const tags = wrapper.findAllComponents(Tag)
    expect(tags).toHaveLength(2)
    expect(tags[0].props('value')).toBe('tag1')
    expect(tags[1].props('value')).toBe('tag2')
  })

  it('should render the post description', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.excerpt').text()).toBe('This is a test post description')
  })

  it('should handle posts without tags', () => {
    const postWithoutTags = { ...mockPost, tags: [] }
    const wrapper = createWrapper({ post: postWithoutTags })
    expect(wrapper.findAllComponents(Tag)).toHaveLength(0)
  })

  it('should handle posts without description', () => {
    const postWithoutDescription = { ...mockPost, description: undefined }
    const wrapper = createWrapper({ post: postWithoutDescription })
    expect(wrapper.find('.excerpt').text()).toBe('')
  })
})
