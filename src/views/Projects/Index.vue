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
