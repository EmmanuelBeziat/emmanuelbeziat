<template>
	<article class="post-list__item post">
		<h1 class="post__title --small">
			<a :href="project.url">
				{{ project.name }}
				<svg v-if="project.archived" width=".8em" height=".8em" viewBox="0 0 20 20" fill="var(--color-red)">
					<path d="M16.07 8H15V5s0-5-5-5-5 5-5 5v3H3.93A1.93 1.93 0 0 0 2 9.93v8.15A1.93 1.93 0 0 0 3.93 20h12.14A1.93 1.93 0 0 0 18 18.07V9.93A1.93 1.93 0 0 0 16.07 8zM10 16a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm3-8H7V5.5C7 4 7 2 10 2s3 2 3 3.5z"/>
				</svg>
			</a>
		</h1>

		<div class="post-infos flex">
			<div class="post__date">Créé le <time>{{ dateFormat(project.created_at, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time> — Dernière mise à jour le <time>{{ dateFormat(project.updated_at, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

			<div class="tags">
				<Tag :value="project.language" v-if="project.language" />
				<Tag :value="project.stargazers" icon="star" />
				<Tag :value="project.forks" icon="fork" />
				<!-- <Tag :value="project.issues" icon="bug" /> -->
			</div>
		</div>

		<div class="post__description">
			{{ project.description }}
			<template v-if="project.homepage">
				— <a :href="project.homepage"> {{ project.homepage }}</a>
			</template>
		</div>
	</article>
</template>

<script>
import Tag from '@/components/Tag'
import dateFormat from '@/plugins/mixins/date'

export default {
	name: 'Project',

	mixins: [dateFormat],

	props: {
		project: {
			type: Object,
			required: true
		}
	},

	components: {
		Tag
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
