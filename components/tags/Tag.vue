<template>
	<span class="c-tag"><i v-if="icon" :class="icon" aria-hidden="true"></i> {{ value }}</span>
</template>

<script>
export default {
	props: ['value', 'icon']
}
</script>


<style lang="stylus" scoped>
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

.c-tag
	display inline-block
	background lighten($color-background, 5%)
	padding 0 .5em
	margin 0 $gutter-small .35em 0
	color $color-text

/*.c-tag:hover
	background darken($color-background, 25%)
	color inherit*/

.c-tag:last-of-type
	margin-right 0
</style>
