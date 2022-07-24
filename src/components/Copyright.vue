<template>
	<div v-once>© {{ year }} Emmanuel Béziat</div>
</template>

<script setup>
import { computed } from 'vue'

const year = computed(() => Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(new Date()))
</script>
