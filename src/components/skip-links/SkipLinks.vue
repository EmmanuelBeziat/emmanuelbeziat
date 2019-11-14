<template>
	<nav :id="`access-shortcuts-wrapper-${position}`" class="skip-link">
		<a href="#content" id="skiplink-go-to-content" class="sr-only sr-only-focusable">Aller au contenu</a>
		<a href="#menu" id="skiplink-go-to-menu" class="sr-only sr-only-focusable">Aller au menu</a>
	</nav>
</template>

<script>
export default {
	name: 'SkipLinks',
	props: ['position']
}
</script>


<style lang="stylus" scoped>

</style>
