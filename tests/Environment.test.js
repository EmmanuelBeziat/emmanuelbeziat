describe('Environment Variables', () => {
  it('should have PORT defined', () => {
    expect(process.env.VITE_PORT).toBeDefined()
    expect(process.env.VITE_PORT).toBe('3033')
  })

  it('should have API_POSTS defined', () => {
    expect(process.env.VITE_API_POSTS).toBeDefined()
    expect(process.env.VITE_API_POSTS).toBe('https://rest.emmanuelbeziat.com/posts')
  })

  it('should have API_REFS defined', () => {
    expect(process.env.VITE_API_REFS).toBeDefined()
    expect(process.env.VITE_API_REFS).toBe('https://rest.emmanuelbeziat.com/portfolio')
  })

  it('should have API_CODES defined', () => {
    expect(process.env.VITE_API_CODES).toBeDefined()
    expect(process.env.VITE_API_CODES).toBe('https://rest.emmanuelbeziat.com/codes')
  })

  it('should have API_PROJECTS defined', () => {
    expect(process.env.VITE_API_PROJECTS).toBeDefined()
    expect(process.env.VITE_API_PROJECTS).toBe('https://api.github.com/users/emmanuelbeziat/repos')
  })

  it('should have OG_TITLE defined', () => {
    expect(process.env.VITE_OG_TITLE).toBeDefined()
    expect(process.env.VITE_OG_TITLE).toBe('Emmanuel Béziat')
  })

  it('should have OG_URL defined', () => {
    expect(process.env.VITE_OG_URL).toBeDefined()
    expect(process.env.VITE_OG_URL).toBe('https://www.emmanuelbeziat.com')
  })

  it('should have OG_IMAGE defined', () => {
    expect(process.env.VITE_OG_IMAGE).toBeDefined()
    expect(process.env.VITE_OG_IMAGE).toBe('/branding/opengraph.jpg')
  })

  it('should have OG_DESCRIPTION defined', () => {
    expect(process.env.VITE_OG_DESCRIPTION).toBeDefined()
    expect(process.env.VITE_OG_DESCRIPTION).toBe('Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.')
  })
})
