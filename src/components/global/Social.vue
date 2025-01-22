<template>
	<nav class="social animation-skew-y" v-once>
		<!-- <Item :url="social.twitter" name="X" icon="x" /> -->
		<Item :url="social.bluesky" name="Bluesky" icon="bluesky" />
		<Item :url="social.instagram" name="Instagram" icon="instagram" />
		<Item :url="social.npmjs" name="NPMJS" icon="npmjs" />
		<Item :url="social.github" name="GitHub" icon="github" />
		<Item :url="social.linkedin" name="LinkedIn" icon="linkedin" />
		<!-- <Item :url="social.codepen" name="CodePen" icon="codepen" /> -->
	</nav>
</template>

<script setup>
import { social } from '@/config'
import Item from '@/components/global/SocialItem.vue'
</script>

<style scoped>
.social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;

	@media (width <= 1120px) {
		margin-top: 1rem;
	}
}
</style>
