const env = JSON.parse(unescape(process.env.PACKAGE_JSON || '%7B%7D'))

export const api = {
	posts: 'https://rest.emmanuelbeziat.com/posts',
	refs: 'https://rest.emmanuelbeziat.com/portfolio',
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
