<template>
	<div class="no-records">
		<span class="icon">
			<Loader mini />
		</span>
		Hum… On dirait que c'est vide par ici.
	</div>
</template>

<script setup>
import Loader from '@/components/loader/Loader.vue'
</script>

<style scoped>
.no-records {
	display: flex;
	flex-direction: column;
	align-items: center;

	.icon {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		display: flex;
		gap: .25em;

		&::before {
			content: "[";
			color: var(--color-red);
		}
		&::after {
			content: "]";
			color: var(--color-red);
		}
	}
}
</style>
