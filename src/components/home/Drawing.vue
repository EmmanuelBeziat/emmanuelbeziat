<template>
	<div class="drawing">
		<img :src="require('@/assets/img/emmanuelb-moon.png')" alt="Emmanuel Béziat (Art by Marie-Laure Rouzier)" loading="lazy">
	</div>
</template>

<script>
export default {
	name: 'Drawing'
}
</script>

<style lang="stylus" scoped>
.drawing
	text-align center

	img
		vertical-align top
		max-width 100%
</style>
