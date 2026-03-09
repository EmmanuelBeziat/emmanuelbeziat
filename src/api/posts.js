import { api } from '@/config'

export const fetchPosts = async () => {
	const response = await fetch(api.posts)

	if (!response.ok) throw new Error(`fetchPosts: HTTP ${response.status}`)

	const data = await response.json()
	return data.filter(item => item.publish)
}
