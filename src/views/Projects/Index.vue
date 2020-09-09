<template>
	<section class="projects">
		<transition mode="out-in" name="fade">
			<div v-if="projects">
				<Search placeholder="Recherche…" v-model="searchTerms" />

				<transition-group name="list" tag="div" class="post-list">
					<article class="post-list__item post" v-for="repo in projects" :key="repo.id">
						<h1 class="post__title --small"><a :href="repo.html_url">{{ repo.name }}</a></h1>

						<div class="post__infos flex">
							<div class="post__date">Créé le <time>{{ repo.created_at | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time> — Dernière mise à jour le <time>{{ repo.updated_at | date({ year: 'numeric', month: 'long', day: 'numeric' }) }}</time></div>

							<div class="post__tags">
								<Tag :value="repo.language" />
								<Tag :value="repo.stargazers" icon="icon-star" />
								<Tag :value="repo.forks" icon="icon-fork" />
								<!-- <Tag :value="repo.issues" icon="icon-bug" /> -->
							</div>
						</div>

						<div class="post__description">{{ repo.description }}</div>
					</article>
				</transition-group>
			</div>

			<Loader v-else />
		</transition>
	</section>
</template>

<script>
import meta from '@/plugins/mixins/meta'
import slug from 'slug'
import Search from '@/components/search/Search'
import Loader from '@/components/loader/Loader'
import Tag from '@/components/tags/Tag'

export default {
	name: 'Projects',

	mixins: [meta],

	data () {
		return {
			head: {
				title: 'repos'
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
		Loader,
		Tag
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'
@require '~@/assets/styles/components/posts.styl'
</style>
