<template>
	<div v-if="offlineReady || needRefresh" class="alert" role="alert">
		<div class="message">
			<span v-if="offlineReady">App ready to work offline</span>
			<span v-else>New content available, click on reload button to update.</span>
		</div>

		<div class="buttons">
			<button v-if="needRefresh" class="button" @click="updateServiceWorker()">Reload</button>
			<button class="button" @click="close">Close</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

export default defineComponent({
	name: 'ReloadPWA',
	setup() {
		const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
		const close = async () => {
			offlineReady.value = false
			needRefresh.value = false
		}

		return { offlineReady, needRefresh, updateServiceWorker, close }
	},

	methods: {
		async close() {
			this.offlineReady.value = false
			this.needRefresh.value = false
		},

		async updateServiceWorker() {
			await updateServiceWorker()
		}
	}
})
</script>

<style scoped>
.alert {
	display: none;
}

.buttons {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4px;
}
</style>
