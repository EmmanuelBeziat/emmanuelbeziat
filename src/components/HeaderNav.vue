<template>
	<nav class="site-menu">
		<nuxt-link to="/" class="site-menu__link" exact>Accueil</nuxt-link>
		<nuxt-link to="/portfolio" class="site-menu__link">Portfolio</nuxt-link>
		<nuxt-link to="/blog" class="site-menu__link">Blog</nuxt-link>
	</nav>
</template>

<script>
export default {
	name: 'headerNav'
}
</script>
