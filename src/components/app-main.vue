<template>
	<main class="site-main">
		<router-view transition="fade" transition-mode="out-in"></router-view>
	</main>
</template>

<script>
export default {
	data () {
		return {
			resume: null
		}
	}
}
</script>
