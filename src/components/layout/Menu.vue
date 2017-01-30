<template>
	<nav class="site-menu">
		<router-link :to="{ name: 'home' }" class="site-menu__link" exact>Accueil</router-link>
		<router-link :to="{ name: 'portfolio' }" class="site-menu__link">Portfolio</router-link>
		<router-link :to="{ name: 'blog' }" class="site-menu__link">Blog</router-link>
	</nav>
</template>

<script>
export default {
	name: 'menu'
}
</script>
