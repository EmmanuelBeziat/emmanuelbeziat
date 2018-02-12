<template>
	<div class="post">
		<article class="post">
			<header class="post__header">
				<h1 class="post__title">{{ post.title }}</h1>

				<div class="post__infos">
					<div class="post__date">Posté le <time>{{ post.date | moment('ddd Do MMM YYYY') }}</time></div>

					<div class="flex">
						<div class="post__tags">
							<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
						</div>

						<div class="post__share">
							<share/>
						</div>
					</div>
				</div>
			</header>

			<div class="post__content" v-html="$md.render(post.content)"></div>

			<footer class="post__footer">
				<div class="flex">
					<div class="post__tags">
						<span class="c-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</span>
					</div>

					<div class="post__share">
						<share/>
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
import Disqus from 'vue-disqus/VueDisqus.vue'
import Share from '~/components/Share'

export default {
	name: 'blogSingle',

	validate ({ params }) {
		return isNaN(params.slug)
	},

	async asyncData ({ params, app }) {
		try {
			let { data } = await app.$axios.get(`${process.env.api.posts}/${params.slug}/`)
			return { post: data }
		}
		catch (e) {
			error({
				statusCode: 204,
				message: 'No content reached'
			})
		}
	},

	components: {
		Disqus,
		Share
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: this.post.title,
			meta: [
				{ name: 'description', content: this.post.description, hid: 'description' },
				{ name: 'twitter:title', content: this.post.title, hid: 'twTitle' },
				{ name: 'twitter:url', content: 'https://www.emmanuelbeziat.com/blog/' + this.post.slug, hid: 'twUrl' },
				{ name: 'twitter:image', content: this.post.image, hid: 'twImage' },
				{ name: 'twitter:description', content: this.post.description, hid: 'twDesc'},

				// Facebook
				{ property: 'og:title', content: this.post.title, hid: 'ogTitle' },
				{ property: 'og:url', content: 'https://www.emmanuelbeziat.com/blog/' + this.post.slug, hid: 'ogUrl' },
				{ property: 'og:image', content: this.post.image, hid: 'ogImage' },
				{ property: 'og:description', content: this.post.description, hid: 'ogDesc' }
			]
		}
	}
}
</script>


<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.post
	[target="_blank"]::after
		content "\e805"
		font-family Icons
		vertical-align baseline
		position relative
		bottom 2px
		size 1em
		display inline-block

	h2, h3, h4
		position relative

		&:hover
			.post__anchor::before
				opacity 1
				transform translateX(0)

.post__title
	margin 0
	color $color-red
	font 400 $font-size-article-title/1.5 $font-stack-heading

	@media (max-width $breakpoint-mobile)
		line-height 1.25

.post__date
	font-size .8em
	color $color-yellow

	@media (max-width $breakpoint-mobile)
		margin .5em 0

.post
	.flex
		@media (max-width $breakpoint-mobile)
			flex-direction column
			align-items flex-start

.post__tags
	margin .5em 0

.post__header
	margin-bottom 2rem
	padding-bottom 2rem
	border-bottom 1px solid $color-separator

.post__footer
	margin-top 2rem
	padding-top 2rem
	border-top 1px solid $color-separator

.post__help
	font-size .9rem
	margin-top 2rem

.post__anchor::before
	opacity 0
	transition .2s ease-in-out
	transform translateX(-75%)

.post__navigation::before
	transition transform .2s ease-in-out

.post__navigation--previous::before
	margin-right 5px

.post__navigation--previous:hover::before
.post__navigation--previous:focus::before
	transform translateX(-25%)

.post__navigation--next::before
	margin-left 5px

.post__navigation--next:hover::before
.post__navigation--next:focus::before
	transform translateX(25%)

.comments
	margin-top 2rem
	padding-top 2rem
	border-top 1px solid $color-separator

@require '~assets/styles/modules/tags.styl'
</style>
