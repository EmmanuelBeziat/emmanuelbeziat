<template>
	<section class="projects">
		<template v-if="projects">
			<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

			<transition-group name="list" tag="div" class="post-list">
				<Project v-for="repo in projects" :key="`repo-${repo.id}`" :repo="repo" />
			</transition-group>
		</template>
	</section>
</template>

<script>
import slug from 'slug'
// import Meta from '@/plugins/mixins/meta'
import Project from '@/views/projects/Project'
import Search from '@/components/Search'

export default {
	name: 'Projects',

	data () {
		return {
			head: {
				title: 'Projets'
			},
			searchTerms: ''
		}
	},

	computed: {
		projects () {
			return this.$store.getters['projects/list'].filter(project => slug(project.name).includes(slug(this.searchTerms.toLowerCase())))
		}
	},

	components: {
		Search,
		Project
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
