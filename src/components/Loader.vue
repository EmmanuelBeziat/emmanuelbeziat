<template>
	<div class="Loader" v-if="loading">
		<div class="loader__item">{ <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span> }</div>
		<div class="loader__title">Chargement en cours <small>alors assieds-toi et tais-toi !</small></div>
	</div>
</template>

<script>
export default {
	name: 'loader',
	data: () => ({
		loading: false
	}),

	methods: {
		start () {
			this.loading = true
		},

		finish () {
			this.loading = false
		}
	}
}
</script>
