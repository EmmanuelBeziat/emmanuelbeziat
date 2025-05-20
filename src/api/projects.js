import { api } from '@/config'

export const fetchProjects = async () => {
	const response = await fetch(`${api.projects}?sort=update`)
	const data = await response.json()

	return data
		.filter(repo => !repo.archived)
		.map(repo => ({
			id: repo.id,
			name: repo.name,
			url: repo.html_url,
			homepage: repo.homepage,
			description: repo.description,
			created_at: repo.created_at,
			updated_at: repo.updated_at,
			pushed_at: repo.pushed_at,
			language: repo.language,
			languages_url: repo.languages_url,
			stargazers: repo.stargazers_count,
			watchers: repo.watchers_count,
			license: repo.license ? repo.license.key : null,
			forks: repo.forks_count,
			issues: repo.open_issues_count,
			archived: repo.archived
		}))
		.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
}
