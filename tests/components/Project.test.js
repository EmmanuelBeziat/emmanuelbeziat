import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Project from '@/components/Project.vue'
import Tag from '@/components/Tag.vue'
import Icon from '@/components/Icon.vue'
import { dateFormat } from '@/plugins/mixins/date'

// Mock the dateFormat function
vi.mock('@/plugins/mixins/date', () => ({
  dateFormat: vi.fn((date) => `Formatted ${date}`)
}))

// Mock the Tag component
vi.mock('@/components/Tag.vue', () => ({
  default: {
    name: 'Tag',
    template: '<div class="tag-mock">{{ value }}</div>',
    props: ['value', 'icon']
  }
}))

// Mock the Icon component
vi.mock('@/components/Icon.vue', () => ({
  default: {
    name: 'Icon',
    props: ['name'],
    template: '<div class="icon-mock">{{ name }}</div>'
  }
}))

describe('Project', () => {
  const mockProject = {
    name: 'Test Project',
    url: 'https://github.com/test/project',
    archived: false,
    created_at: '2023-01-01',
    pushed_at: '2023-05-20',
    language: 'JavaScript',
    stargazers: 10,
    forks: 5,
    description: 'This is a test project',
    homepage: 'https://testproject.com'
  }

  const createWrapper = (props = {}) => {
    return mount(Project, {
      props: {
        project: { ...mockProject, ...props }
      },
			global: {
        components: {
          Icon
        }
      }
    })
  }

  it('should render the project title', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.title a').text()).toBe('Test Project')
  })

  /* it('should render the archive icon for archived projects', () => {
    const wrapper = createWrapper({ archived: true })
    expect(wrapper.find('.title svg').exists()).toBe(true)
  }) */

  it('should not render the archive icon for non-archived projects', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.title svg').exists()).toBe(false)
  })

  /* it('should render formatted dates', () => {
    const wrapper = createWrapper()
    const dateInfo = wrapper.find('.date').text()
    expect(dateInfo).toContain('Créé le Formatted 2023-01-01')
    expect(dateInfo).toContain('Dernière mise à jour le Formatted 2023-05-20')
  }) */

  it('should render language tag if language is provided', () => {
    const wrapper = createWrapper()
    const languageTag = wrapper.findComponent(Tag)
    expect(languageTag.exists()).toBe(true)
    expect(languageTag.props('value')).toBe('JavaScript')
  })

  it('should not render language tag if language is not provided', () => {
    const wrapper = createWrapper({ language: null })
    const languageTags = wrapper.findAllComponents(Tag)
    expect(languageTags.some(tag => tag.props('value') === null)).toBe(false)
  })

  it('should render stargazers and forks tags', () => {
    const wrapper = createWrapper()
    const tags = wrapper.findAllComponents(Tag)
    expect(tags[1].props()).toEqual({ value: 10, icon: 'star' })
    expect(tags[2].props()).toEqual({ value: 5, icon: 'fork' })
  })

  it('should render project description', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.excerpt').text()).toContain('This is a test project')
  })

  it('should render homepage link if provided', () => {
    const wrapper = createWrapper()
    const homepageLink = wrapper.find('.excerpt a')
    expect(homepageLink.exists()).toBe(true)
    expect(homepageLink.attributes('href')).toBe('https://testproject.com')
    expect(homepageLink.text()).toBe('https://testproject.com')
  })

  it('should not render homepage link if not provided', () => {
    const wrapper = createWrapper({ homepage: null })
    expect(wrapper.find('.excerpt a').exists()).toBe(false)
  })
})
