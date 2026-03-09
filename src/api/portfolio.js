import { api } from '@/config'

export const fetchPortfolio = async () => {
	const response = await fetch(api.refs)

	if (!response.ok) throw new Error(`fetchPortfolio: HTTP ${response.status}`)

	const data = await response.json()
	return data
}
