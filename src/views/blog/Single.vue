<template>
	<article class="post" v-if="post">
		<header class="post__header">
			<h1 class="post__title">{{ post.title }}</h1>

			<div class="post-infos">
				<div class="post__date">Posté le <time>{{ dateFormat(post.date, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

				<div class="flex">
					<div class="tags">
						<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
					</div>

					<Share />
				</div>
			</div>
		</header>

		<div class="post-content" v-html="post.markup" />

		<footer class="post__footer">
			<div class="flex">
				<div class="tags">
					<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
				</div>

				<Share />
			</div>

			<div class="post__help">
				Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/forum/" target="_blank" rel="noopener">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener">Alsacréations</a>…
			</div>
		</footer>

		<Head>
			<title>Emmanuel Béziat :: {{ post.title }} — Blog</title>
			<meta property="og:title" :content="`Emmanuel Béziat :: ${post.title} — Blog`">
			<meta property="og:url" :content="fullURL">
			<meta property="og:image" :content="post.image">
			<meta property="og:description" :content="post.description">
			<meta name="description" :content="post.description">
		</Head>
	</article>
</template>

<script>
import { openGraph } from '@/config'
import { Head } from '@vueuse/head'

import scroll from '@/plugins/mixins/scroll'
import dateFormat from '@/plugins/mixins/date'
import Share from '@/components/share/Share'
import Tag from '@/components/Tag'

export default {
	name: 'BlogSingle',

	mixins: [scroll, dateFormat],

	props: {
		slug: {
			type: String,
			required: true
		}
	},

	data () {
		return {
			fullURL: openGraph.url + this.$route.fullPath
		}
	},

	computed: {
		post () {
			return this.$store.getters['posts/getPost'](this.$props.slug)
		},
	},

	components: {
		Share,
		Tag,
		Head
	}
}
</script>
