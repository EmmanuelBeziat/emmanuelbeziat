import { defineStore } from 'pinia'
import { fetchPosts } from '@/api/posts'

export const usePostsStore = defineStore('posts', {
	state: () => ({
		posts: []
	}),

	getters: {
		list: state => state.posts,
		count: state => state.posts.length,
		getPost: state => slug => state.posts.find(post => post.slug === slug)
	},

	actions: {
		async fetch () {
			try {
				this.posts = await fetchPosts()
			}
			catch (error) {
				console.error(`Store error: ${error}`)
			}
		}
	}
})
