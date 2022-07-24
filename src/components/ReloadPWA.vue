<template>
	<div v-if="offlineReady || needRefresh" class="alert" role="alert">
		<div class="message mt-1">
			<span v-if="offlineReady">App ready to work offline </span>
			<span v-else>New content available, click on reload button to update.</span>
		</div>
		<div class="buttons flex align-middle mt-2 md:mt-0">
			<button v-if="needRefresh" @click="updateServiceWorker()" class="button">
				Reload
			</button>
			<button @click="close" class="button">
				Close
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

const { updateServiceWorker } = useRegisterSW()
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

<style lang="stylus">
.alert
	display none
</style>
