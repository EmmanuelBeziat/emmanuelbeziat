<template>
	<transition mode="out-in" name="fade">

		<article class="post" v-if="reference">
			<header class="post__header">
				<h1 class="post__title">{{ title }}</h1>

				<div class="post__infos">
					<div class="flex">
						<div class="post__tags">
							<Tag v-for="tag in reference.tags" :key="`tag-${tag}`" :value="tag" />
						</div>

						<div class="post__tags">
							<Tag v-for="client in reference.clients" :key="`client-${client}`" :value="client" />
						</div>
					</div>
				</div>
			</header>

			<Markdown class="post__content" :source="reference.content" />

			<footer class="post__footer">
				<router-link exact :to="'/portfolio'" class="navigation-previous icon-arrow-left">Revenir au portfolio</router-link>
			</footer>
		</article>

		<Loader v-else />

	</transition>
</template>

<script>
import meta from '@/plugins/mixins/meta'
import titles from '@/plugins/mixins/titles'
import Markdown from '@/components/markdown/MarkdownRender'
import Loader from '@/components/loader/Loader'
import Tag from '@/components/tags/Tag'

export default {
	name: 'PortfolioSingle',
	mixins: [meta, titles],

	computed: {
		reference () {
			return this.$store.getters['portfolio/getRef'](this.$route.params.slug)
		},

		title () {
			return this.getDynamicTitle(this.ref.title)
		}
	},

	components: {
		Markdown,
		Loader,
		Tag
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
