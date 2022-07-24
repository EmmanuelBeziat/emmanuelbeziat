<template>
	<div class="share">
		<span class="sr-only">Partager cet article :</span>

		<template v-if="canShare">
			<Button icon="native" name="Partager" @on-click="shareNative" />
		</template>

		<template v-else>
			<Button icon="twitter" name="Twitter" @on-click="shareManual" />
			<Button icon="facebook" name="Facebook" @on-click="shareManual" />
			<Button icon="linkedin" name="LinkedIn" @on-click="shareManual" />
			<Button icon="link" name="Copier URL" @on-click="shareManual" />
		</template>
	</div>
</template>

<script setup>
import Button from '@/components/share/Button.vue'

const canShare = navigator.share

const shareNative = () => {
	navigator.share({
		title: 'Via @EmmanuelBeziat',
		text: encodeURIComponent(document.title),
		url: encodeURIComponent(window.location.href),
	})
}

const sharePopup = (url, title, width, height) => {
	const popupWidth = width || 640
	const popupHeight = height || 320
	const popupPosX = window.screenX + window.innerWidth / 2 - popupWidth / 2
	const popupPosY = window.screenY + window.innerHeight / 2 - popupHeight / 2
	const popup = window.open(url, title, `scrollbars=yes, menubar=0, location=0, status=0, width=${popupWidth}, height=${popupHeight}, top=${popupPosY}, left=${popupPosX}`)

	popup.focus()
	return true
}

const shareManual = social => {
	let shareUrl = ''
	const pageUrl = encodeURIComponent(window.location.href)
	const pageTitle = encodeURIComponent(document.title)

	switch (social) {
		case 'twitter':
			shareUrl = `https://twitter.com/intent/tweet?text=${pageTitle} — ${pageUrl}&via=@EmmanuelBeziat`
			sharePopup(shareUrl, 'Partager sur Twitter')
			break

		case 'facebook':
			shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
			sharePopup(shareUrl, 'Partager sur Facebook')
			break

		case 'linkedin':
			shareUrl = `https://www.linkedin.com/shareArticle?url=${pageUrl}`
			sharePopup(shareUrl, 'Partager sur LinkedIn')
			break

		case 'link': {
			if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
				const url = window.location.href
				navigator.clipboard.writeText(url)
				alert(`URL "${url}" copiée dans le presse papier`)
			}
			else {
				alert('L’API clipboard n’est pas compatible avec votre navigateur')
			}
			break
		}
	}
}
</script>

<style lang="stylus" scoped>
.share
	display flex
	gap 4px
</style>
