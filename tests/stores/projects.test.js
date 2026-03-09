import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProjectsStore } from '@/stores/projects'

vi.mock('@/api/projects', () => ({
	fetchProjects: vi.fn()
}))

import { fetchProjects } from '@/api/projects'

const mockProjects = [
	{ slug: 'project-1', name: 'Project 1' },
	{ slug: 'project-2', name: 'Project 2' },
]

describe('useProjectsStore', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
		vi.clearAllMocks()
	})

	it('should have an empty projects array by default', () => {
		const store = useProjectsStore()
		expect(store.projects).toEqual([])
	})

	it('should fetch and store projects', async () => {
		fetchProjects.mockResolvedValue(mockProjects)
		const store = useProjectsStore()
		await store.fetch()
		expect(store.projects).toEqual(mockProjects)
	})

	it('should expose count getter', async () => {
		fetchProjects.mockResolvedValue(mockProjects)
		const store = useProjectsStore()
		await store.fetch()
		expect(store.count).toBe(2)
	})

	it('should find a project by slug', async () => {
		fetchProjects.mockResolvedValue(mockProjects)
		const store = useProjectsStore()
		await store.fetch()
		expect(store.getProject('project-1')).toEqual(mockProjects[0])
	})

	it('should handle fetch errors gracefully', async () => {
		fetchProjects.mockRejectedValue(new Error('Network error'))
		const store = useProjectsStore()
		await expect(store.fetch()).resolves.not.toThrow()
		expect(store.projects).toEqual([])
	})
})
