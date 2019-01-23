<template>
	<section class="home">
		<div class="presentation">
			<Presentation />
			<CodeHome />
		</div>
	</section>
</template>

<script>
import Presentation from '@/components/home/Presentation'
import CodeHome from '@/components/home/Code'

export default {
	name: 'home',

	components: {
		Presentation,
		CodeHome
	},

	head: {
		title: {
			inner: 'Accueil'
		}
	},
}
</script>

<style lang="stylus" scoped>
.presentation
	.prism-show-language
		display none
</style>
