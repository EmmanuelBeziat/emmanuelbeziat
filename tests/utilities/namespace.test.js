import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { defineNamespace } from '@/utilities/namespace'

describe('defineNamespace()', () => {
	let originalClasses

	beforeEach(() => {
		originalClasses = document.body.className
		document.body.className = 'existing-class another-class'
	})

	afterEach(() => {
		document.body.className = originalClasses
	})

	it('should remove existing body classes', () => {
		defineNamespace('home')
		expect(document.body.classList.contains('existing-class')).toBe(false)
		expect(document.body.classList.contains('another-class')).toBe(false)
	})

	it('should add the namespace as a body class', () => {
		defineNamespace('home')
		expect(document.body.classList.contains('home')).toBe(true)
	})

	it('should replace previous namespace with the new one', () => {
		defineNamespace('home')
		defineNamespace('blog')

		expect(document.body.classList.contains('home')).toBe(false)
		expect(document.body.classList.contains('blog')).toBe(true)
		expect(document.body.className).toBe('blog')
	})
})
