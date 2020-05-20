<template>
	<section class="home">
		<div class="presentation">
			<Presentation />
			<CodeHome />
		</div>
	</section>
</template>

<script>
import meta from '@/plugins/mixins/meta'
import Presentation from '@/components/home/Presentation'
import CodeHome from '@/components/home/Code'

export default {
	name: 'home',
	mixins: [meta],

	data () {
		return {
			head: {
				title: 'Accueil'
			}
		}
	},

	components: {
		Presentation,
		CodeHome
	}
}
</script>

<style lang="stylus" scoped>
.presentation
	.prism-show-language
		display none
</style>
