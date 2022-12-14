<template>
	<section class="home">
		<div class="presentation">
			<Presentation />
			<CodeHome />
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
