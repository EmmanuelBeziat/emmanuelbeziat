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
