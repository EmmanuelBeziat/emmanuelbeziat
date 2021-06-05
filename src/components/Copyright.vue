<template>
	<div v-once>© {{ year }} Emmanuel Béziat</div>
</template>

<script>
export default {
	name: 'Copyright',

	computed: {
		year () {
			return Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(new Date())
		}
	}
}
</script>
