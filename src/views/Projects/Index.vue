<template>
	<section class="projects">
		<transition mode="out-in" name="fade">
			<Loader v-if="loading" />
			<div v-else-if="error">{{ error }}</div>
			<div v-else>
				<Search placeholder="Recherche…" v-model="searchTerms" />

				<div class="post-list">
					<article class="post-list__item" v-for="projet in filteredList" :key="projet.id">
						<h1 class="post-list__title"><a :href="projet.html_url">{{ projet.name }}</a></h1>

						<div class="post-list__infos">
							<div class="post-list__date">Créé le <time>{{ projet.created_at | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time> — Dernière mise à jour le <time>{{ projet.updated_at | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

							<div class="post-list__tags">
								<Tag :value="projet.language" />
								<Tag :value="projet.stargazers_count" icon="icon-star" />
							</div>
						</div>

						<div class="post-list__description">{{ projet.description }}</div>
					</article>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>
import { api } from '@/config'
import { meta } from '@/plugins/mixins/meta'
import slug from 'slug'
import Search from '@/components/search/Search'
import Loader from '@/components/loader/Loader'
import Tag from '@/components/tags/Tag'

export default {
	name: 'Projets',
	mixins: [meta],

	data () {
		return {
			head: {
				title: 'Projets'
			},
			projects: null,
			error: null,
			loading: true,
			searchTerms: ''
		}
	},

	mounted () {
		this.axios.get(`${api.projects}?sort=updated`)
			.then(response => this.projects = response.data)
			.catch(error => this.error = error.message)
			.finally(() => this.loading = false)
	},


	components: {
		Search,
		Loader,
		Tag
	},

	computed: {
		filteredList () {
			return this.projects.filter(project => slug(project.name).includes(slug(this.searchTerms.toLowerCase())))
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
