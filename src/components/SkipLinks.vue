<template>
	<nav :id="`access-shortcuts-wrapper-${position}`" class="skip-link">
		<a href="#content" :id="`skiplink-go-to-content-from-${position}`" class="sr-only sr-only-focusable">Aller au contenu</a>
		<a href="#menu" :id="`skiplink-go-to-menu-from-${position}`" class="sr-only sr-only-focusable">Aller au menu</a>
	</nav>
</template>

<script>
export default {
	name: 'SkipLinks',

	props: {
		position: {
			type: String,
			default: 'top',
			validator: value => ['top', 'bottom'].indexOf(value) !== -1
		}
	}
}
</script>

<style lang="stylus" scoped>
.skip-link
	position absolute
	z-index 10
</style>
