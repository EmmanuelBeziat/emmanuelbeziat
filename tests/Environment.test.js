import { describe, it, expect } from 'vitest'

describe('Environment Variables', () => {
  it('should have PORT defined', () => {
    expect(process.env.VITE_PORT).toBeDefined()
  })

  it('should have API_POSTS defined', () => {
    expect(process.env.VITE_API_POSTS).toBeDefined()
  })

  it('should have API_REFS defined', () => {
    expect(process.env.VITE_API_REFS).toBeDefined()
  })

  it('should have API_CODES defined', () => {
    expect(process.env.VITE_API_CODES).toBeDefined()
  })

  it('should have API_PROJECTS defined', () => {
    expect(process.env.VITE_API_PROJECTS).toBeDefined()
  })

  it('should have OG_TITLE defined', () => {
    expect(process.env.VITE_OG_TITLE).toBeDefined()
  })

  it('should have OG_URL defined', () => {
    expect(process.env.VITE_OG_URL).toBeDefined()
  })

  it('should have OG_IMAGE defined', () => {
    expect(process.env.VITE_OG_IMAGE).toBeDefined()
  })

  it('should have OG_DESCRIPTION defined', () => {
    expect(process.env.VITE_OG_DESCRIPTION).toBeDefined()
  })
})
