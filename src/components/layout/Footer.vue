<template>
	<footer class="footer" v-once>
		<Copyright />
	</footer>
</template>

<script setup>
import Copyright from '@/components/layout/Copyright.vue'
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1em 0;
  display: none;

	@supports (content-visibility: auto) {
		content-visibility: auto;
	}

	@media (width <= 1120px) {
		display: block;
		grid-area: footer;
	}
}
</style>
