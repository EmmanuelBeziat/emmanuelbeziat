const env = import.meta.env

export const api = {
	posts: env.VITE_API_POSTS,
	refs: env.VITE_API_REFS,
	codes: env.VITE_API_CODES,
	projects: env.VITE_API_PROJECTS,
}

export const social = {
	twitter: env.VITE_SOCIAL_TWITTER,
	facebook: env.VITE_SOCIAL_FACEBOOK,
	github: env.VITE_SOCIAL_GITHUB,
	linkedin: env.VITE_SOCIAL_LINKEDIN,
	codepen: env.VITE_SOCIAL_CODEPEN,
	instagram: env.VITE_SOCIAL_INSTAGRAM,
	youtube: env.VITE_SOCIAL_YOUTUBE
}

export const openGraph = {
	title: env.VITE_OG_TITLE,
	url: env.VITE_OG_URL,
	image: env.VITE_OG_IMAGE,
	description: env.VITE_OG_DESCRIPTION
}

export const github = {
	profile: env.VITE_GITHUB_PROFILE,
	stats: env.VITE_GITHUB_STATS,
	languages: env.VITE_GITHUB_LANGUAGES
}

export const personal = {
	amazonLists: [
		{
			title: "Informatique",
			url: "https://www.amazon.fr/hz/wishlist/ls/262X5U712UDBE?ref_=wl_share"
		},
		{
			"title": "Musique",
			"url": "https://www.amazon.fr/hz/wishlist/ls/2JYJFI9NWY4GM?ref_=wl_share"
		},
		{
			"title": "Bricolage",
			"url": "https://www.amazon.fr/hz/wishlist/ls/1ZT5X3BZXZPVH?ref_=wl_share"
		},
		{
			"title": "Gaming",
			"url": "https://www.amazon.fr/hz/wishlist/ls/NEG3ECFITM7X?ref_=wl_share"
		},
		{
			"title": "Autres",
			"url": "https://www.amazon.fr/hz/wishlist/ls/287DJMM2YDJKB?ref_=wl_share"
		}
	],
	birthday: env.VITE_PERSO_BIRTHDAY
}
