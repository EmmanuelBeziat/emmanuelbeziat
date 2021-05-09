<template>
	<article class="post" v-if="reference">
		<header class="post__header">
			<h1 class="post__title">{{ reference.title }}</h1>

			<div class="post-infos">
				<div class="flex">
					<div class="tags">
						<Tag v-for="tag in reference.tags" :key="`tag-${tag}`" :value="tag" />
					</div>

					<div class="tags">
						<Tag v-for="client in reference.clients" :key="`client-${client}`" :value="client" />
					</div>
				</div>
			</div>
		</header>

		<div class="post-content" v-html="reference.markup" />

		<footer class="post__footer">
			<nav class="post-navigation">
				<Navigation type="previous" :to="{ name: 'Portfolio' }" label="Revenir au portfolio" />
			</nav>
		</footer>
	</article>
</template>

<script>
import Tag from '@/components/Tag'
import Navigation from '@/components/Navigation'

export default {
	name: 'PortfolioSingle',

	props: {
		slug: {
			type: String,
			required: true
		}
	},

	computed: {
		reference () {
			return this.$store.getters['portfolio/getRef'](this.$props.slug)
		}
	},

	mounted () {
		if (this.reference) {
			document.title = `Emmanuel Béziat :: ${this.reference.title}`
		}
	},

	components: {
		Tag,
		Navigation
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
