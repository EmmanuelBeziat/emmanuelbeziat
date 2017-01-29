<template>
	<div class="site">
		<layout-header></layout-header>

		<div class="site-content">
			<layout-menu></layout-menu>

			<main class="site-main">
				<router-view></router-view>
			</main>
		</div>

		<layout-footer></layout-footer>
	</div>
</template>

<script>
import layoutHeader from 'components/layout/Header'
import layoutMenu from 'components/layout/Menu'
import layoutFooter from 'components/layout/footer'

export default {
	components: {
		layoutHeader,
		layoutMenu,
		layoutFooter
	}
}
</script>

<style lang="stylus">
@require './assets/stylus/main.styl'
</style>
