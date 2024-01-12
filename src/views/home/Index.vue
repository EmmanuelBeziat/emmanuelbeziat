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
import { defineNamespace } from '@/plugins/mixins/namespace'

import Presentation from '@/components/Presentation.vue'
import CodeHome from '@/components/Code.vue'

onMounted(() => {
	defineNamespace('home')
})
</script>

<style scope>
.presentation {
	container: presentation / inline-size;
}

.code {
	margin-top: 4rem;
}
</style>
