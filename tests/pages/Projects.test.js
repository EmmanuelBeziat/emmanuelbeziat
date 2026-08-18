import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import ProjectsIndex from '@/views/projects/Index.vue'
import { useProjectsStore } from '@/stores/projects'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { defineNamespace } from '@/utilities/namespace'

// Mock components
vi.mock('@/components/Project.vue', () => ({ default: { template: '<div class="project-mock"></div>' } }))
vi.mock('@/components/Search.vue', () => ({ default: { template: '<div class="search-mock"></div>' } }))
vi.mock('@/components/GithubCards.vue', () => ({ default: { template: '<div class="github-cards-mock"></div>' } }))
vi.mock('@/components/loader/NoContent.vue', () => ({ default: { template: '<div class="no-content-mock"></div>' } }))

// Mock composables and functions
vi.mock('vue-router', () => ({
	useRoute: vi.fn()
}))
vi.mock('@unhead/vue', () => ({
	useHead: vi.fn(),
	useSeoMeta: vi.fn()
}))
vi.mock('@/utilities/namespace', () => ({
	defineNamespace: vi.fn()
}))
vi.mock('@/stores/projects', () => ({
	useProjectsStore: vi.fn()
}))

describe('ProjectsIndex', () => {
	let wrapper
	let mockProjectsStore

	beforeEach(() => {
		// Mock route
		useRoute.mockReturnValue({ fullPath: '/projects' })

		// Mock projects store
		mockProjectsStore = {
			list: [
				{ id: 1, name: 'Project 1' },
				{ id: 2, name: 'Project 2' }
			]
		}
		useProjectsStore.mockReturnValue(mockProjectsStore)

		wrapper = mount(ProjectsIndex, {
			global: {
				stubs: ['sequential-entrance']
			}
		})
	})

	it('should render the projects section', () => {
		expect(wrapper.find('.projects').exists()).toBe(true)
	})

	it('should render the Search component', () => {
		expect(wrapper.find('.search-mock').exists()).toBe(true)
	})

	it('should render the GithubCards component', () => {
		expect(wrapper.find('.github-cards-mock').exists()).toBe(true)
	})

	it('should call defineNamespace on mount', () => {
		expect(defineNamespace).toHaveBeenCalledWith('projects')
	})
})
