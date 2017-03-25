<template>
	<div class="site">
		<module-header/>

		<div class="site-content">
			<module-menu/>
			<main class="site-main">
				<nuxt/>
			</main>
		</div>

		<module-footer/>
	</div>
</template>

<script>
import ModuleHeader from '~components/Header.vue'
import ModuleMenu from '~components/Menu.vue'
import ModuleFooter from '~components/Footer.vue'

export default {
	components: {
		ModuleHeader,
		ModuleMenu,
		ModuleFooter
	}
}
</script>
