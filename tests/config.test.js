import { describe, it, expect } from 'vitest'
import { api, social, openGraph, github, personal, update } from '@/config'

describe('config.js', () => {
	it('should expose all API configuration keys', () => {
		expect(api).toHaveProperty('posts')
		expect(api).toHaveProperty('refs')
		expect(api).toHaveProperty('codes')
		expect(api).toHaveProperty('projects')

		Object.values(api).forEach(url => {
			expect(url).toBeDefined()
			expect(typeof url).toBe('string')
			expect(url.length).toBeGreaterThan(0)
		})
	})

	it('should expose all social network configuration keys', () => {
		const expectedKeys = ['twitter', 'facebook', 'github', 'linkedin', 'codepen', 'instagram', 'youtube', 'npmjs', 'bluesky']

		expectedKeys.forEach(key => {
			expect(social).toHaveProperty(key)
		})
	})

	it('should expose complete openGraph metadata', () => {
		expect(openGraph).toHaveProperty('title')
		expect(openGraph).toHaveProperty('url')
		expect(openGraph).toHaveProperty('image')
		expect(openGraph).toHaveProperty('description')

		expect(openGraph.title).toBeDefined()
		expect(openGraph.url).toBeDefined()
		expect(openGraph.image).toBeDefined()
		expect(openGraph.description).toBeDefined()
	})

	it('should expose complete github configuration', () => {
		expect(github).toHaveProperty('profile')
		expect(github).toHaveProperty('stats')
		expect(github).toHaveProperty('languages')

		Object.values(github).forEach(url => {
			expect(url).toBeDefined()
			expect(typeof url).toBe('string')
		})
	})

	it('should expose personal data with Amazon lists and birthday', () => {
		expect(personal).toHaveProperty('birthday')
		expect(personal).toHaveProperty('amazonLists')
		expect(personal.amazonLists).toHaveLength(5)
		expect(personal.birthday).toBeDefined()

		personal.amazonLists.forEach(list => {
			expect(list).toHaveProperty('title')
			expect(list).toHaveProperty('url')
			expect(list.url).toContain('amazon.fr')
		})
	})

	it('should expose last build date', () => {
		expect(update).toHaveProperty('lastUpdate')
		expect(update.lastUpdate).toBeDefined()
	})
})
