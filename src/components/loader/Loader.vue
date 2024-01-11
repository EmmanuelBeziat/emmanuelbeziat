<template>
	<div class="loader">
		<template v-if="!mini">
			<h2>Chargement en cours</h2>
			<p>Alors assieds-toi et tais-toi !</p>
		</template>

		<Icon name="loader" />
	</div>
</template>

<script setup>
import Icon from '@/components/icon/Icon.vue'

defineProps({
	mini: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped>
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h2 {
  margin: 0;
}

h2::before,
h2::after {
  display: inline-block;
  color: var(--color-red);
  font-size: 2em;
  font-weight: 400;
  margin: 0 1rem;
  transform: translateY(.3em);
}

h2::before {
  content: "{";
}

h2::after {
  content: "}";
}

p {
  margin: 0;
}
</style>
