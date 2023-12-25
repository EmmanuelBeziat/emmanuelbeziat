<template>
	<nav class="social" v-once>
		<Item :url="social.twitter" name="Twitter" icon="twitter" />
		<Item :url="social.instagram" name="Instagram" icon="instagram" />
		<Item :url="social.github" name="GitHub" icon="github" />
		<Item :url="social.linkedin" name="LinkedIn" icon="linkedin" />
		<Item :url="social.codepen" name="CodePen" icon="codepen" />
	</nav>
</template>

<script setup>
import { social } from '@/config'
import Item from '@/components/layout/SocialItem.vue'
</script>

<style lang="stylus" scoped>
.social
	display flex
	flex-wrap wrap
	justify-content center
	gap 4px

	@media $mq-desktop
		margin-top 1rem
</style>
