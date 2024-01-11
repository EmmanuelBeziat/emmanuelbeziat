<template>
	<div class="share">
		<span class="visually-hidden">Partager cet article :</span>

		<Button icon="share" name="Partager" @on-click="dispatch" />
	</div>
</template>

<script setup>
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import Button from '@/components/share/Button.vue'

const share = data => {
	navigator.share(data)
}

const copy = url => {
	if (navigator?.clipboard?.writeText) {
		navigator.clipboard.writeText(url)
		Toastify({
			text: `URL "${url}" copiée dans le presse papier`,
			duration: 2000,
			style:{
				background: 'var(--color-blue)'
			}
		}).showToast()
	}
	else {
		Toastify({
			text: 'L’API clipboard n’est pas compatible avec votre navigateur',
			duration: 2000,
			style:{
				background: 'var(--color-red)'
			}
		}).showToast()
	}
}

const dispatch = () => {
	const data = {
		title: 'Via &emmanuelBeziat',
		text: encodeURIComponent(document.title),
		url: window.location.href
	}
	navigator?.share && navigator?.canShare(data) ? share(data) : copy(data.url)
}
</script>

<style lang="stylus" scoped>
.share
	display flex
	gap 4px
</style>
