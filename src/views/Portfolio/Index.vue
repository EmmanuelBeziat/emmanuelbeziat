<template>
	<section class="showcase">
		<transition mode="out-in" name="fade">
			<div v-if="refs">
				<sequential-entrance tag="div" animation="entranceFadeIn" delay="50" class="showcase__list">
					<router-link v-for="ref in refs" :key="ref.slug" class="showcase__item" :to="`/portfolio/${ref.slug}/`" >
						<div :class="['showcase__layer', ref.color]">
							<svg viewBox="0 0 100 100" class="showcase__image icon">
								<use :xlink:href="`${publicPath}img/sprite.svg#${ref.image}`"></use>
							</svg>
						</div>

						<div class="showcase__caption">
							<h2 class="showcase__title">{{ ref.title }}</h2>
							<div class="portfolio-tags">
								<svg class="portfolio-tags__icon" width="1em" viewBox="0 0 24 24">
									<path d="M18.7,10.9l-7.9-7.9c-0.3-0.3-0.8-0.5-1.3-0.5H1.8C0.8,2.4,0,3.2,0,4.2v7.7c0,0.5,0.2,0.9,0.5,1.3l7.9,7.9
									c0.7,0.7,1.8,0.7,2.5,0l7.7-7.7C19.4,12.7,19.4,11.6,18.7,10.9L18.7,10.9z M4.2,8.4c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8
									S6,5.6,6,6.6S5.2,8.4,4.2,8.4z M23.5,13.4l-7.7,7.7c-0.7,0.7-1.8,0.7-2.5,0l0,0l6.5-6.5c0.6-0.6,1-1.5,1-2.4c0-0.9-0.4-1.7-1-2.4
									l-7.4-7.4h1.8c0.5,0,0.9,0.2,1.3,0.5l7.9,7.9C24.2,11.6,24.2,12.7,23.5,13.4L23.5,13.4z"/>
								</svg>
								<div class="showcase-tags__list">
									<span class="showcase-tags__item" v-for="tag in ref.tags" :key="tag">{{ tag }}</span>
								</div>
							</div>
						</div>
					</router-link>
				</sequential-entrance>

				<div class="c-note c-note--success">
					<div class="showcase__thanks">
						Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart" aria-hidden="true"></i>)</small>
					</div>
				</div>
			</div>

			<Loader v-else />
		</transition>
	</section>
</template>

<script>
import meta from '@/plugins/mixins/meta'
import Loader from '@/components/loader/Loader'

export default {
	name: 'Portfolio',
	mixins: [meta],

	data () {
		return {
			head: {
				title: 'Portfolio'
			},
			searchTerms: '',
			publicPath: process.env.BASE_URL
		}
	},

	computed: {
		refs () {
			return this.$store.getters['portfolio/list']
		}
	},

	components: {
		Loader
	},
}
</script>


<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/showcase.styl'
@require '~@/assets/styles/modules/notes.styl'

.portfolio-tags
	display flex

.portfolio-tags__icon
	size 1em
	fill var(--color-yellow)
	margin-right 10px
</style>
