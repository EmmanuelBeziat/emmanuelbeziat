import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchProjects } from '@/api/projects'

vi.mock('@/config', () => ({
	api: { projects: 'https://api.example.com/projects' }
}))

const mockRepos = [
	{
		id: 1,
		name: 'repo-active',
		html_url: 'https://github.com/user/repo-active',
		homepage: 'https://example.com',
		description: 'An active repo',
		created_at: '2020-01-01T00:00:00Z',
		updated_at: '2023-06-01T00:00:00Z',
		pushed_at: '2023-06-01T00:00:00Z',
		language: 'JavaScript',
		languages_url: 'https://api.github.com/repos/user/repo-active/languages',
		stargazers_count: 10,
		watchers_count: 5,
		license: { key: 'mit' },
		forks_count: 2,
		open_issues_count: 1,
		archived: false
	},
	{
		id: 2,
		name: 'repo-archived',
		html_url: 'https://github.com/user/repo-archived',
		homepage: null,
		description: 'An archived repo',
		created_at: '2019-01-01T00:00:00Z',
		updated_at: '2020-01-01T00:00:00Z',
		pushed_at: '2020-01-01T00:00:00Z',
		language: 'CSS',
		languages_url: 'https://api.github.com/repos/user/repo-archived/languages',
		stargazers_count: 0,
		watchers_count: 0,
		license: null,
		forks_count: 0,
		open_issues_count: 0,
		archived: true
	}
]

describe('fetchProjects()', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn())
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	it('should filter out archived repos', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockRepos)
		})

		const result = await fetchProjects()
		expect(result).toHaveLength(1)
		expect(result[0].name).toBe('repo-active')
	})

	it('should map repo fields correctly', async () => {
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve([mockRepos[0]])
		})

		const result = await fetchProjects()
		const project = result[0]

		expect(project.id).toBe(1)
		expect(project.url).toBe('https://github.com/user/repo-active')
		expect(project.stargazers).toBe(10)
		expect(project.license).toBe('mit')
	})

	it('should handle null license', async () => {
		const repoWithoutLicense = { ...mockRepos[0], license: null }
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve([repoWithoutLicense])
		})

		const result = await fetchProjects()
		expect(result[0].license).toBeNull()
	})

	it('should throw an error on HTTP error response', async () => {
		fetch.mockResolvedValue({
			ok: false,
			status: 403
		})

		await expect(fetchProjects()).rejects.toThrow('fetchProjects: HTTP 403')
	})
})
