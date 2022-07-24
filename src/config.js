const env = JSON.parse(unescape(import.meta.env.PACKAGE_JSON || '%7B%7D'))

export const api = {
	posts: 'https://rest.emmanuelbeziat.com/posts',
	refs: 'https://rest.emmanuelbeziat.com/portfolio',
	codes: 'https://rest.emmanuelbeziat.com/codes',
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
	linkedin: 'https://www.linkedin.com/in/emmanuel-b%C3%A9ziat-54242949/',
	codepen: 'https://codepen.io/EmmanuelBeziat/',
	instagram: 'https://www.instagram.com/EmmanuelBeziat',
	youtube: 'https://www.youtube.com/c/EmmanuelB'
}

export const openGraph = {
	title: '',
	url: 'https://www.emmanuelbeziat.com',
	image: '/branding/opengraph-longs.jpg',
	description: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.'
}

export const github = {
	profile: 'https://github.com/EmmanuelBeziat',
	stats: 'https://github-readme-stats.vercel.app/api?username=emmanuelbeziat&show_icons=true&theme=dracula&locale=fr&bg_color=233238&hide_border=true&title_color=f77669&text_color=eeeeee&icon_color=c3e88d&count_private=true',
	languages: 'https://github-readme-stats.vercel.app/api/top-langs/?username=emmanuelbeziat&layout=compact&locale=fr&bg_color=233238&hide_border=true&title_color=f77669&text_color=eeeeee&icon_color=c3e88d'
}
