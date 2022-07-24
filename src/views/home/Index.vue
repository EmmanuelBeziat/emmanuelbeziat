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
import { useHead } from '@vueuse/head'

import { defineNamespace } from '@/plugins/mixins/namespace'

import Presentation from '@/views/home/Presentation.vue'
import CodeHome from '@/views/home/Code.vue'

onMounted(() => {
	defineNamespace('home')
})

useHead({
	title: 'Emmanuel Béziat'
})
</script>
