<template>
	<section class="home">
		<div class="presentation">
			<Presentation />
			<CodeHome class="code animation-fade-bounce" />
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue'
import { defineNamespace } from '@/utilities/namespace'

import Presentation from '@/components/Presentation.vue'
import CodeHome from '@/components/Code.vue'

onMounted(() => {
	defineNamespace('home')
})
</script>

<style scoped>
.presentation {
	container: presentation / inline-size;
}

.code {
	margin-top: 2rem;
}
</style>
