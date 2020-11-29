<template>
	<article class="post" v-if="reference">
		<header class="post__header">
			<h1 class="post__title">{{ reference.title }}</h1>

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

		<div class="post__content" v-html="reference.markup" />

		<footer class="post__footer">
			<router-link exact :to="'/portfolio'" class="navigation-previous">
				<svg viewBox="0 0 128 128"><g><g><line style="stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="57.12" x2="17.787" y1="103.334" y2="64"/><line style="stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="17.787" x2="57.12" y1="64" y2="24.666"/></g><line style="stroke-width:12;stroke-miterlimit:10;" x1="17.787" x2="118.213" y1="64" y2="64"/></g></svg>
				Revenir au portfolio
			</router-link>
		</footer>
	</article>
</template>

<script>
import Tag from '@/components/Tag'

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

	components: {
		Tag
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
