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
 * Shows a toast notification
 * @param {string} text - The message to display
 * @param {string} color - The background color custom property
 */
const toast = (text, color) => {
	Toastify({
		text,
		duration: 2000,
		style:{
			background: `var(${color})`
		}
	}).showToast()
}

/**
 * Copies the provided URL to the clipboard and shows a toast notification
 * @param {string} url - The URL to copy to the clipboard
 */
const copy = async url => {
	if (!navigator?.clipboard?.writeText) {
		toast('L’API clipboard n’est pas compatible avec votre navigateur', '--color-red')
		return
	}

	try {
		await navigator.clipboard.writeText(url)
		toast(`URL "${url}" copiée dans le presse papier`, '--color-blue')
	}
	catch {
		toast('Impossible de copier l’URL dans le presse papier', '--color-red')
	}
}

/**
 * Shares the provided data using the Web Share API, falls back to copying the URL if sharing fails
 * @param {Object} data - The data to share, including title, text, and url.
 */
const share = async data => {
	try {
		await navigator.share(data)
	}
	catch (error) {
		// The user closed the share dialog
		if (error?.name === 'AbortError') return
		await copy(data.url)
	}
}

/**
 * Dispatches the share action. Uses the Web Share API if available, otherwise falls back to copying the URL to the clipboard
 */
const dispatch = () => {
	const data = {
		title: 'Via &emmanuelBeziat',
		text: document.title,
		url: window.location.href
	}

	return navigator?.share && navigator?.canShare?.(data) ? share(data) : copy(data.url)
}
</script>

<style scoped>
.share {
	display: flex;
	gap: 4px;
}
</style>
