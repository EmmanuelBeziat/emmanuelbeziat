import { api } from '@/config'

export const fetchPosts = async () => {
	const response = await fetch(api.posts)

	if (!response.ok) throw new Error(`fetchPosts: HTTP ${response.status}`)

	const data = await response.json()

	if (!Array.isArray(data)) throw new Error('fetchPosts: expected an array')

	const posts = data.filter(item => item.publish)

	if (!posts.every(item => typeof item?.slug === 'string' && item.slug)) throw new Error('fetchPosts: every item needs a slug')

	return posts
}
