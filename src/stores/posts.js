import { defineStore } from 'pinia'
import { api } from '@/config'

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
			await fetch(api.posts)
				.then(response => response.json())
				.then(data => { this.posts = data.filter(item => item.publish) })
				.catch(error => console.error(`Store error: ${error}`))
		}
	}
})
