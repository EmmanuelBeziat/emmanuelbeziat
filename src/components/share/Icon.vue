<template>
	<svg viewBox="0 0 512 512">
		<title>{{ title }}</title>
		<slot />
	</svg>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true
	}
})
</script>

<style lang="stylus" scoped>
svg
	padding .5em
	fill currentColor
	width 100%
</style>
