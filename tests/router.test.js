import { describe, it, expect } from 'vitest'
import router from '@/router'

describe('Router', () => {
	it('should define all main routes', () => {
		const routeNames = router.getRoutes().map(route => route.name)

		expect(routeNames).toContain('Home')
		expect(routeNames).toContain('Blog')
		expect(routeNames).toContain('Post')
		expect(routeNames).toContain('Portfolio')
		expect(routeNames).toContain('Reference')
		expect(routeNames).toContain('Projects')
		expect(routeNames).toContain('Me')
		expect(routeNames).toContain('NotFound')
	})

	it('should have path, name and meta title for each route', () => {
		const routes = router.getRoutes()

		routes.forEach(route => {
			expect(route.path).toBeDefined()
			expect(route.name).toBeDefined()
			expect(route.meta.title).toBeDefined()
			expect(route.meta.title.length).toBeGreaterThan(0)
		})
	})

	it('should define the catch-all route as NotFound', () => {
		const notFound = router.getRoutes().find(route => route.name === 'NotFound')

		expect(notFound.path).toMatch(/:pathMatch/)
	})

	it('should use -active as the active link class', () => {
		expect(router.options.linkActiveClass).toBe('-active')
	})

	describe('scrollBehavior', () => {
		it('should return savedPosition when provided', () => {
			const savedPosition = { top: 150, left: 0 }
			const result = router.options.scrollBehavior({}, {}, savedPosition)

			expect(result).toEqual(savedPosition)
		})

		it('should return hash selector when hash is present', () => {
			const result = router.options.scrollBehavior({ hash: '#section' }, {})

			expect(result).toEqual({ selector: '#section' })
		})

		it('should return top: 0 by default', () => {
			const result = router.options.scrollBehavior({}, {})

			expect(result).toEqual({ top: 0 })
		})
	})
})
