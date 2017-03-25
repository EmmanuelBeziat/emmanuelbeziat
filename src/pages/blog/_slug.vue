<template>
	<div class="post">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ post.title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ post.date | moment('ddd Do MMM YYYY') }}</time></div>

					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
						</div>

						<div class="post__share">
							<module-share/>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="post.content"></div>

			<footer class="post__footer">
				<div class="flex">
					<div class="post__tags">
						<span class="c-tag" v-for="tag in post.tags">{{ tag }}</span>
					</div>

					<div class="post__share">
						<module-share/>
					</div>
				</div>

				<div class="post__help">
					Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/dashboard" target="_blank" rel="noopener">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener">Alsacréations</a>…
				</div>
			</footer>

		</article>

		<div class="comments">
			<disqus shortname="emmanuelbeziat" :identifier="post.slug"></disqus>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import markdown from '~plugins/vue-md-render'
import Disqus from 'vue-disqus/VueDisqus'
import ModuleShare from '~components/Share'

export default {
	name: 'blogSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async asyncData ({ params }) {
		let { data } = await axios.get(`https://rest.emmanuelbeziat.com/posts/${params.slug}`)
		data.content = markdown.render(data.content)
		return { post: data }
	},

	components: {
		Disqus,
		ModuleShare
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: this.post.title,
			meta: [
				{ hid: 'description', name: 'description', content: 'Portfolio en ligne d’un développeur web du sud. Billets de blogs, tutoriels, astuces, diatribes et réflexions sur le métier, le code et plein d’autres choses.' },
				{ name: 'twitter:title', content: this.post.title, hid: 'twTitle' },
				{ name: 'twitter:url', content: 'https://www.emmanuelbeziat.com/blog/'+this.post.slug, hid: 'twUrl' },
				{ name: 'twitter:image', content: this.post.image, hid: 'twImage' },
				{ name: 'twitter:description', content: this.post.description, hid: 'twDesc'},

				// Facebook
				{ property: 'og:title', content: this.post.title, hid: 'ogTitle' },
				{ property: 'og:url', content: 'https://www.emmanuelbeziat.com/blog/'+this.post.slug, hid: 'ogUrl' },
				{ property: 'og:image', content: this.post.image, hid: 'ogImage' },
				{ property: 'og:description', content: this.post.description, hid: 'ogDesc' }
			]
		}
	}
}
</script>
