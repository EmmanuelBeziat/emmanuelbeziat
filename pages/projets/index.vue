<template>
	<section class="projects">
		<Search placeholder="Recherche…" v-model="searchTerms" />

		<div class="post-list">
			<article class="post-list__item" v-for="projet in filteredList" :key="projet.id">
				<h1 class="post-list__title"><a :href="projet.html_url">{{ projet.name }}</a></h1>

				<div class="post-list__infos">
					<div class="post-list__date">Créé le <time>{{ projet.created_at | date('Do MMMM YYYY') }}</time> — Dernière mise à jour le <time>{{ projet.updated_at | date('Do MMMM YYYY') }}</time></div>

					<div class="post-list__tags">
						<Tag :value="projet.language" />
						<Tag :value="projet.stargazers_count" icon="icon-star" />
					</div>
				</div>

				<div class="post-list__description">{{ projet.description }}</div>
			</article>
		</div>
	</section>
</template>

<script>
import slug from 'slug'
import Search from '~/components/search/Search'
import Tag from '~/components/tags/Tag'

export default {
	name: 'Projects',

	asyncData ({ params, app}) {
		return app.$axios.get(`${process.env.api.github}?sort=updated`)
			.then((res) => {
				return {
					projets: res.data,
					searchTerms: ''
				}
			})
	},

	components: {
		Search,
		Tag
	},

	computed: {
		filteredList () {
			return this.projets.filter(projet => slug(projet.name).includes(slug(this.searchTerms.toLowerCase())))
		}
	},

	head () {
		return {
			title: 'Projets'
		}
	},
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'
@require '~assets/styles/components/posts.styl'
</style>
