<template>
	<nav class="social" v-once>
			<Item :url="social.twitter" name="Twitter">
				<TwitterIcon />
			</Item>

			<Item :url="social.instagram" name="Instagram">
				<InstagramIcon />
			</Item>

			<Item :url="social.github" name="GitHub">
				<GithubIcon />
			</Item>

			<Item :url="social.linkedin" name="LinkedIn">
				<LinkedInIcon />
			</Item>

			<Item :url="social.codepen" name="CodePen">
				<CodePenIcon />
			</Item>
	</nav>
</template>

<script setup>
import { social } from '@/config'
import TwitterIcon from '@/assets/icons/twitter.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedInIcon from '@/assets/icons/linkedin.svg'
import CodePenIcon from '@/assets/icons/codepen.svg'

import Item from '@/components/layout/SocialItem.vue'
</script>

<style lang="stylus" scoped>
@require '../../assets/styles/variables.styl'
@require '../../assets/styles/mixins.styl'

.social
	display flex
	flex-wrap wrap
	justify-content center
	gap 4px

	@media $mq-desktop
		margin-top 1rem
</style>
