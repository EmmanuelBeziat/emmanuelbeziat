<template>
	<div class="note" :class="`--${props.type}`">
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		default: 'info',
		validator: value => ['info', 'success', 'question', 'important', 'alert'].includes(value)
	}
})
</script>
