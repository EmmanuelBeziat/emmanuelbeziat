<template>
	<transition mode="out-in" name="fade">

		<article class="post" v-if="ref">
			<header class="post__header">
				<h1 class="post__title">{{ ref.title }}</h1>

				<div class="post__infos">
					<div class="flex">
						<div class="post__tags">
							<Tag v-for="tag in ref.tags" :key="tag" :value="tag" />
						</div>

						<div class="post__tags">
							<Tag v-for="client in ref.clients" :key="client" :value="client" />
						</div>
					</div>
				</div>
			</header>

			<Markdown class="post__content" :source="ref.content" />

			<footer class="post__footer">
				<router-link exact :to="'/portfolio'" class="navigation-previous icon-arrow-left">Revenir au portfolio</router-link>
			</footer>
		</article>

		<Loader v-else />

	</transition>
</template>

<script>
import { api } from '@/config'
import { meta } from '@/plugins/mixins/meta'
import Markdown from '@/components/markdown/Markdown'
import Loader from '@/components/loader/Loader'
import Tag from '@/components/tags/Tag'

export default {
	name: 'portfolioSingle',
	mixins: [meta],

	data () {
		return {
			ref: null
		}
	},

	mounted () {
		this.getRef()
	},

	watch: {
		'$route.params.slug': 'getRef'
	},

	methods: {
		getRef () {
			this.axios.get(`${api.refs}/${this.$route.params.slug}/`)
				.then(response => {
					this.ref = response.data
					this.head.title = response.data.title || this.head.title
					this.head.description = response.data.description || this.head.description
					this.head.url = `https://www.emmanuelbeziat.com/portfolio/${this.$route.params.slug}/`
					this.$emit('updateHead')
				})
				.catch(error => this.$router.push('/404'))
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
