<template>
	<component :is="IconComponent" v-if="IconComponent" />
</template>

<script setup>
import { shallowRef, onMounted } from 'vue'

const props = defineProps({
	name: {
		type: String,
		required: true
	}
})

const IconComponent = shallowRef(null)

onMounted(async () => {
	try {
		const { default: component } = await import(`../../assets/images/icons/${props.name}.svg`)
		IconComponent.value = component
	}
	catch (error) {
		console.error(`Failed to import icon: ${props.name}`)
	}
})
</script>
