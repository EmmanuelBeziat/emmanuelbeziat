<template>
	<section class="projects">
		<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

		<KeepAlive>
			<GithubCards :cards="{ stats: true, languages: false }" />
		</KeepAlive>

		<template v-if="projects">
			<TransitionGroup name="list" tag="div" class="post-list">
				<Project v-for="project in projects" :key="`repo-${project.id}`" :project="project" />
			</TransitionGroup>
		</template>

		<Loader mini v-else />
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import slug from 'slug'

import { useProjectsStore } from '@/stores/projects'
import { defineNamespace } from '@/plugins/mixins/namespace'

import Project from '@/components/Project.vue'
import Search from '@/components/Search.vue'
import GithubCards from '@/components/GithubCards.vue'
import Loader from '@/components/Loader.vue'

const searchTerms = ref('')
const projectsStore = useProjectsStore()
const projects = computed(() => projectsStore.list.filter(project => slug(project.name).includes(slug(searchTerms.value.toLowerCase()))))

onMounted(() => {
	defineNamespace('projects')
})

useHead({
	title: 'Projets'
})
</script>
