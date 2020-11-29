const env = JSON.parse(unescape(process.env.PACKAGE_JSON || '%7B%7D'))

export const api = {
	posts: 'http://localhost:3002/posts',
	refs: 'http://localhost:3002/portfolio',
	codes: 'http://localhost:3002/codes',
	projects: 'https://api.github.com/users/emmanuelbeziat/repos',
}

export const app = {
	name: env.name,
	version: env.version,
	description: env.description,
	author: env.author,
}

export const social = {
	twitter: 'https://twitter.com/EmmanuelBeziat',
	facebook: 'https://www.facebook.com/EmmanuelBeziat',
	github: 'https://github.com/EmmanuelBeziat',
	linkedin: 'https://www.linkedin.com/in/emmanuel-b-54242949',
	codepen: 'https://codepen.io/EmmanuelBeziat/',
	instagram: 'https://www.instagram.com/EmmanuelBeziat',
	youtube: 'https://www.youtube.com/c/EmmanuelB'
}

export const openGraph = {
	title: '',
	url: 'https://www.emmanuelbeziat.com',
	image: '/branding/opengraph-facebook.jpg',
	description: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.'
}
