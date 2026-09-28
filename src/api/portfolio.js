import { api } from '@/config'

export const fetchPortfolio = async () => {
	const response = await fetch(api.refs)

	if (!response.ok) throw new Error(`fetchPortfolio: HTTP ${response.status}`)

	const data = await response.json()

	if (!Array.isArray(data)) throw new Error('fetchPortfolio: expected an array')
	if (!data.every(item => typeof item?.slug === 'string' && item.slug)) throw new Error('fetchPortfolio: every item needs a slug')

	return data
}
