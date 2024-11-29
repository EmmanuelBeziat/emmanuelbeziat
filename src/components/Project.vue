<template>
	<ListArticle>
		<template #title>
			<a :href="project.url">
				<Icon v-if="project.archived" class="tags-icon" width=".8em" name="locked" />
				{{ project.name }}
			</a>
		</template>

		<template #date>
			Créé le <time>{{ dateFormat(project.created_at, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time> — Dernière mise à jour le <time>{{ dateFormat(project.pushed_at, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
		</template>

		<template #tags>
			<Tag :value="project.language" v-if="project.language" />
			<Tag :value="project.stargazers" icon="star" />
			<Tag :value="project.forks" icon="fork" />
			<!-- <Tag :value="project.issues" icon="bug" /> -->
		</template>

		<template #description>
			{{ project.description }}
			<template v-if="project.homepage">
				— <a :href="project.homepage"> {{ project.homepage }}</a>
			</template>
		</template>
	</ListArticle>
</template>

<script setup>
import ListArticle from '@/components/layouts/ListArticle.vue'
import { dateFormat } from '@/plugins/mixins/date'
import Tag from '@/components/Tag.vue'
import Icon from '@/components/Icon.vue'

defineProps({
	project: {
		type: Object,
		required: true
	}
})
</script>

<style scoped>
.tags-icon {
	color: var(--color-red);
}
</style>
