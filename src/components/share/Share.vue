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

<script>
import Button from '@/components/share/Button'

export default {
	name: 'Share',

	components: {
		Button
	},

	computed: {
		canShare: () => navigator.share
	},

	methods: {
		sharePopup (url, title, width, height) {
			const popupWidth = width || 640
			const popupHeight = height || 320
			const popupPosX = window.screenX + window.innerWidth / 2 - popupWidth / 2
			const popupPosY = window.screenY + window.innerHeight / 2 - popupHeight / 2
			const popup = window.open(url, title, `scrollbars=yes, menubar=0, location=0, status=0, width=${popupWidth}, height=${popupHeight}, top=${popupPosY}, left=${popupPosX}`)

			popup.focus()
			return true
		},

		shareNative () {
			navigator.share({
				title: 'Via @EmmanuelBeziat',
				text: encodeURIComponent(document.title),
				url: encodeURIComponent(window.location.href),
			})
		},

		shareManual (social) {
			let shareUrl = ''
			const pageUrl = encodeURIComponent(window.location.href)
			const pageTitle = encodeURIComponent(document.title)

			switch (social) {
				case 'twitter':
					shareUrl = `https://twitter.com/intent/tweet?text=${pageTitle} — ${pageUrl}&via=@EmmanuelBeziat`
					this.sharePopup(shareUrl, 'Partager sur Twitter')
					break

				case 'facebook':
					shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`
					this.sharePopup(shareUrl, 'Partager sur Facebook')
					break

				case 'linkedin':
					shareUrl = `https://www.linkedin.com/shareArticle?url=${pageUrl}`
					this.sharePopup(shareUrl, 'Partager sur LinkedIn')
					break

				case 'link': {
					const dummyShare = document.createElement('input')
					document.body.appendChild(dummyShare)
					dummyShare.value = window.location.href
					dummyShare.select()
					document.execCommand('copy')
					document.body.removeChild(dummyShare)
					if (this.$notify) {
						this.$notify({
							group: 'share',
							title: 'URL copiée dans le presse papier',
							text: window.location.href
						})
					}
					break
				}
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.module-share
	display flex
	gap 4px
</style>
