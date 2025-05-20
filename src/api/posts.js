import { api } from '@/config'

export const fetchPosts = async () => {
	const response = await fetch(api.posts)
	const data = await response.json()
	return data.filter(item => item.publish)
}
