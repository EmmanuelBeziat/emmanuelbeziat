<template>
	<section class="portfolio">
		<div class="showcase__list">
			<router-link v-for="ref in refs" :key="ref.slug" class="showcase__item" :to="'/portfolio/'+ref.slug" >
				<div :class="['showcase__layer', ref.color]">
					<svg viewBox="0 0 100 100" class="showcase__image icon">
						<use :xlink:href="'/sprite.svg#' + ref.image"></use>
					</svg>
				</div>

				<div class="showcase__caption">
					<h2 class="showcase__title">{{ ref.title }}</h2>
					<div class="portfolio-tags">
						<i class="icon-tag" aria-hidde="true"></i>
						<div class="showcase-tags__list">
							<span class="showcase-tags__item" v-for="tag in ref.tags" :key="tag">{{ tag }}</span>
						</div>
					</div>
				</div>
			</router-link>
		</div>

		<div class="c-note c-note--success">
			<div class="showcase__thanks">
				Et bien d’autres au fil des ans <small>(merci, hé ! <i class="icon-heart"></i>)</small>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Portfolio',

	asyncData ({ params, app}) {
		return app.$axios.get(process.env.api.refs)
			.then((res) => {
				return { refs: res.data }
			})
	},
	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Portfolio'
		}
	}
}
</script>


<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/components/showcase.styl'
@require '~assets/styles/modules/notes.styl'
</style>
