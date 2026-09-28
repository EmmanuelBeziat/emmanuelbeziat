import { api } from '@/config'

export const fetchCodes = async () => {
	const response = await fetch(api.codes)

	if (!response.ok) throw new Error(`fetchCodes: HTTP ${response.status}`)

	const data = await response.json()

	if (!Array.isArray(data)) throw new Error('fetchCodes: expected an array')
	if (!data.every(item => typeof item?.slug === 'string' && item.slug)) throw new Error('fetchCodes: every item needs a slug')

	return data
}
