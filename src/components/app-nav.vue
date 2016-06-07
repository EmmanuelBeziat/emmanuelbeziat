<template>
	<nav class="site-menu">
		<a v-link="{ path: '/' }">Home</a>
		<a v-link="{ path: '/portfolio' }">Portfolio</a>
		<a v-link="{ path: '/blog' }">Blog</a>
	</nav>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>
