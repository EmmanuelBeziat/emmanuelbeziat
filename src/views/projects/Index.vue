<template>
	<section class="projects">
		<Search v-model="searchTerms" placeholder="Recherche…" label="Rechercher" />

		<KeepAlive>
			<GithubCards class="card" :cards="{ stats: true, languages: false }" />
		</KeepAlive>

		<template v-if="projects.length">
			<sequential-entrance animation="animation-fade" delay="100" class="post-list">
				<Project v-for="project in projects" :key="`repo-${project.id}`" :project />
			</sequential-entrance>
		</template>

		<NoContent v-else />
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import slug from 'slug'

import { useProjectsStore } from '@/stores/projects'
import { defineNamespace } from '@/utilities/namespace'

import Project from '@/components/Project.vue'
import Search from '@/components/Search.vue'
import GithubCards from '@/components/GithubCards.vue'
import NoContent from '@/components/loader/NoContent.vue'

const searchTerms = ref('')
const projectsStore = useProjectsStore()
const route = useRoute()
const fullURL = computed(() => openGraph.url + route.fullPath)
const projects = computed(() => projectsStore.list.filter(project => slug(project.name).includes(slug(searchTerms.value.toLowerCase()))))

onMounted(() => {
	defineNamespace('projects')
})

useHead({
	title: 'Projets'
})

useSeoMeta({
	ogUrl: fullURL,
})
</script>

<style scoped>
.card {
	margin-block: 2.5rem;
}

.post-list {
	display: grid;
}
</style>
