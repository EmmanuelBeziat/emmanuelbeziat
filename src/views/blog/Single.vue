<template>
	<article class="post" v-if="post">
		<header class="post__header">
			<h1 class="post__title">{{ post.title }}</h1>

			<div class="post__infos">
				<div class="post__date">Posté le <time>{{ dateFormat(post.date, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

				<div class="flex">
					<div class="post__tags">
						<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
					</div>

					<div class="post__share">
						<Share />
					</div>
				</div>
			</div>
		</header>

		<div class="post__content" v-html="post.markup" />

		<footer class="post__footer">
			<div class="flex">
				<div class="post__tags">
					<Tag v-for="(tag, index) in post.tags" :key="`tag-${index}`" :value="tag" />
				</div>

				<div class="post__share">
					<Share />
				</div>
			</div>

			<div class="post__help">
				Un problème ? Une question ? <br>Vous pouvez me contacter sur <a href="https://www.twitter.com/EmmanuelBeziat" target="_blank" rel="noopener">Twitter</a>, poster un ticket sur <a href="https://github.com/EmmanuelBeziat/emmanuelbeziat/issues" target="_blank" rel="noopener">Github</a>, ou bien créer un sujet sur un forum d’entraide comme <a href="https://zestedesavoir.com/" target="_blank" rel="noopener">ZesteDeSavoir</a>, <a href="https://openclassrooms.com/forum/" target="_blank" rel="noopener">OpenClassrooms</a>, <a href="http://www.alsacreations.com/" target="_blank" rel="noopener">Alsacréations</a>…
			</div>
		</footer>
	</article>
</template>

<script>
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

	computed: {
		post () {
			return this.$store.getters['posts/getPost'](this.$props.slug)
		}
	},

	mounted () {
		window.document.title = `Emmanuel Béziat :: ${this.post.title}`
	},

	components: {
		Share,
		Tag
	}
}
</script>

<style lang="stylus">
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>