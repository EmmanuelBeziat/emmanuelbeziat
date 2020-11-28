<template>
	<article class="post-list__item post">
		<h1 class="post__title --small"><a :href="repo.html_url">{{ repo.name }}</a></h1>

		<div class="post__infos flex">
			<div class="post__date">Créé le <time>{{ dateFormat(repo.created_at, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time> — Dernière mise à jour le <time>{{ dateFormat(repo.updated_at, { year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

			<div class="post__tags">
				<Tag :value="repo.language" />
				<Tag :value="repo.stargazers" icon="star" />
				<Tag :value="repo.forks" icon="fork" />
				<!-- <Tag :value="repo.issues" icon="bug" /> -->
			</div>
		</div>

		<div class="post__description">{{ repo.description }}</div>
	</article>
</template>

<script>
import Tag from '@/components/Tag'
import dateFormat from '@/plugins/mixins/date'

export default {
	name: 'Project',

	mixins: [dateFormat],

	props: {
		repo: {
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
