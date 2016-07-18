<template>
	<nav class="site-menu">
		<a class="site-menu__link" v-link="{ name: 'home', exact: true }">Home</a>
		<a class="site-menu__link" v-link="{ name: 'portfolio' }">Portfolio</a>
		<a class="site-menu__link" v-link="{ name: 'blog' }">Blog</a>
	</nav>
</template>
