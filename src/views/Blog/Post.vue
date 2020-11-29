<template>
	<transition mode="out-in" name="fade">
		<article class="post" v-if="post">
			<header class="post__header">
				<h1 class="post__title">{{ title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ post.date | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

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

			<Markdown class="post__content" :source="post.markdown" :options="{ anchorPermalink: true }" />

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

		<Loader v-else />
	</transition>
</template>

<script>
import meta from '@/plugins/mixins/meta'
import titles from '@/plugins/mixins/titles'
import scroll from '@/plugins/mixins/scroll'
import Loader from '@/components/loader/Loader'
import Markdown from '@/components/markdown/MarkdownRender'
import Share from '@/components/share/Share'
import Tag from '@/components/tags/Tag'

export default {
	name: 'BlogSingle',

	mixins: [meta, titles, scroll],

	computed: {
		post () {
			return this.$store.getters['posts/getPost'](this.$route.params.slug)
		},

		title () {
			return this.getDynamicTitle(this.post.title)
		}
	},

	components: {
		Markdown,
		Loader,
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
