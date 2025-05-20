import { api } from '@/config'

export const fetchPortfolio = async () => {
	const response = await fetch(api.refs)
	const data = await response.json()
	return data
}
