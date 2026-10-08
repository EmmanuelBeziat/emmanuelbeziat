import { describe, it, expect, vi, afterEach } from 'vitest'
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

		it('should return hash element when hash is present', () => {
			const result = router.options.scrollBehavior({ hash: '#section' }, {})

			expect(result).toEqual({ el: '#section' })
		})

		it('should return top: 0 by default', () => {
			const result = router.options.scrollBehavior({}, {})

			expect(result).toEqual({ top: 0 })
		})
	})
	describe('view transitions', () => {
		afterEach(async () => {
			delete document.startViewTransition
			await router.push('/')
		})

		it('should navigate normally without the View Transitions API', async () => {
			await router.push('/blog')

			expect(router.currentRoute.value.name).toBe('Blog')
		})

		it('should wrap navigation in a view transition and finish it once rendered', async () => {
			await router.push('/')
			let update
			document.startViewTransition = vi.fn(callback => {
				update = callback()
				return { finished: Promise.resolve() }
			})

			await router.push('/portfolio')

			expect(document.startViewTransition).toHaveBeenCalledOnce()
			expect(router.currentRoute.value.name).toBe('Portfolio')
			await expect(update).resolves.toBeUndefined()
		})

		it('should pause entrance animations until the transition has finished', async () => {
			await router.push('/')
			let endTransition
			const finished = new Promise(resolve => endTransition = resolve)
			document.startViewTransition = vi.fn(callback => {
				callback()
				return { finished }
			})

			await router.push('/projets')

			expect(document.documentElement.classList.contains('is-navigating')).toBe(true)

			endTransition()
			await finished
			await Promise.resolve()

			expect(document.documentElement.classList.contains('is-navigating')).toBe(false)
		})

		it('should not start a view transition when only the hash changes', async () => {
			await router.push('/blog')
			document.startViewTransition = vi.fn(() => ({ finished: Promise.resolve() }))

			await router.push('/blog#section')

			expect(document.startViewTransition).not.toHaveBeenCalled()
		})
	})
})
