import { api } from '@/config'

export const fetchCodes = async () => {
	const response = await fetch(api.codes)

	if (!response.ok) throw new Error(`fetchCodes: HTTP ${response.status}`)

	const data = await response.json()
	return data
}
