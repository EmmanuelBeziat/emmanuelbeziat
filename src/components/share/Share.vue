<template>
	<div class="module-share">
		<span class="sr-only">Partager cet article :</span>

		<template v-if="canShare">
			<ShareButton icon="share" name="Partager" type="share" @on-click="shareAuto" />
		</template>

		<template v-else>
			<ShareButton icon="twitter" name="Twitter" type="twitter" @on-click="shareManual" />
			<ShareButton icon="facebook" name="Facebook" type="facebook" @on-click="shareManual" />
			<ShareButton icon="linkedin" name="LinkedIn" type="linkedin" @on-click="shareManual" />
			<ShareButton icon="link" name="Copier URL" type="link" @on-click="shareManual" />
		</template>
	</div>
</template>

<script>
import ShareButton from '@/components/share/ShareButton'

export default {
	name: 'Share',

	components: {
		ShareButton
	},

	computed: {
		canShare () {
			return navigator.share
		}
	},

	methods: {
		sharePopup (url, title, width, height) {
			const popupWidth = width || 640
			const popupHeight = height || 320
			const popupPosX = window.screenX + window.innerWidth / 2 - popupWidth / 2
			const popupPosY = window.screenY + window.innerHeight / 2 - popupHeight / 2
			const popup = window.open(url, title, 'scrollbars=yes, menubar=0, location=0, status=0, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupPosY + ', left=' + popupPosX)

			popup.focus()
			return true
		},

		shareAuto () {
			navigator.share({
				title: 'Via @EmmanuelBeziat',
				text: document.title,
				url: window.location.href,
			})
		},

		shareManual (social) {
			let shareUrl = ''
			const pageUrl = encodeURIComponent(window.location.href)
			const pageTitle = encodeURIComponent(document.title)

			switch (social) {
				case 'twitter':
					shareUrl = `https://twitter.com/intent/tweet?text=${pageTitle} — ${pageUrl}&via=EmmanuelBeziat`
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
					this.$notify({
						group: 'share',
						title: 'URL copiée dans le presse papier',
						text: window.location.href
					})
					break
				}
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'

.module-share
	--color-brand-twitter $color-brand-twitter
	--color-brand-facebook $color-brand-facebook
	--color-brand-codepen $color-brand-codepen
	--color-brand-github $color-brand-github
	--color-brand-linkedin $color-brand-linkedin
	display flex
	gap 4px
</style>
