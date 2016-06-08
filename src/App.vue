<template>
	<div class="site">
		<app-header></app-header>
		<div class="site-content">
			<app-nav></app-nav>
			<app-main></app-main>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from './components/app-header'
import appNav from './components/app-nav'
import appMain from './components/app-main'
import appFooter from './components/app-footer'

export default {
	components: {
		appHeader,
		appNav,
		appMain,
		appFooter
	}
}
</script>

<style lang="stylus">
	@require './assets/stylus/main.styl'
</style>
