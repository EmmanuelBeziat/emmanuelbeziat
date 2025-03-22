<template>
	<div class="share">
		<span class="visually-hidden">Partager cet article :</span>

		<Button icon="share" name="Partager" @on-click="dispatch" />
	</div>
</template>

<script setup>
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import Button from '@/components/share/Button.vue'

/**
 * Shares the provided data using the Web Share API
 * @param {Object} data - The data to share, including title, text, and url.
 */
const share = data => {
	navigator.share(data)
}

/**
 * Copies the provided URL to the clipboard and shows a toast notification
 * @param {string} url - The URL to copy to the clipboard
 */
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

/**
 * Dispatches the share action. Uses the Web Share API if available, otherwise falls back to copying the URL to the clipboard
 */
const dispatch = () => {
	const data = {
		title: 'Via @emmanuelBeziat',
		text: encodeURIComponent(document.title),
		url: window.location.href
	}
	navigator?.share && navigator?.canShare(data) ? share(data) : copy(data.url)
}
</script>

<style scoped>
.share {
	display: flex;
	gap: 4px;
}
</style>
