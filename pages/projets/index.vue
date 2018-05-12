<template>
	<section class="projects">
		<div class="c-search">
			<input class="c-search__input" type="search" placeholder="Recherche…" v-model="search">
		</div>

		<div class="post-list">
			<article class="post-list__item" v-for="projet in filteredList" :key="projet.id">
				<h1 class="post-list__title"><a :href="projet.html_url">{{ projet.name }}</a></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Créé le <time>{{ projet.created_at | moment('Do MMMM YYYY') }}</time> — Dernière mise à jour le <time>{{ projet.updated_at | moment('Do MMMM YYYY') }}</time></div>

					<div class="post-list__tags">
						<span class="c-tag">{{ projet.language }}</span>
						<span class="c-tag"><i class="icon-star" aria-hidden="true"></i> {{ projet.stargazers_count }}</span>
					</div>
				</div>

				<div class="post-list__description">{{ projet.description }}</div>
			</article>
		</div>
	</section>
</template>

<script>
import slug from 'slug'

export default {
	name: 'Projects',

	asyncData ({ params, app}) {
		return app.$axios.get(`${process.env.api.github}?sort=updated`)
			.then((res) => {
				return {
					projets: res.data,
					search: ''
				}
			})
	},

	computed: {
		filteredList () {
			return this.projets.filter(projet => slug(projet.name).includes(slug(this.search.toLowerCase())))
		}
	},

	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	},

	head () {
		return {
			title: 'Projets'
		}
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/components/posts.styl'
@require '~assets/styles/modules/search.styl'
@require '~assets/styles/modules/tags.styl'
</style>
