import { api } from '@/config'

export const fetchCodes = async () => {
	const response = await fetch(api.codes)
	const data = await response.json()
	return data
}
