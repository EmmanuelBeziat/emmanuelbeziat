<template>
	<div class="module-share">
		<button @click="share('twitter')" class="c-share--twitter"><i class="icon-twitter c-share__icon" aria-hidden="true"></i><span class="sr-only">Twitter</span></button>
		<button @click="share('facebook')" class="c-share--facebook"><i class="icon-facebook c-share__icon" aria-hidden="true"></i><span class="sr-only">Facebook</span></button>
		<button @click="share('linkedin')" class="c-share--linkedin"><i class="icon-linkedin c-share__icon" aria-hidden="true"></i><span class="sr-only">LinkedIn</span></button>
		<button @click="share('link')" class="c-share--link"><i class="icon-link c-share__icon" aria-hidden="true"></i><span class="sr-only">Copier URL</span></button>
	</div>
</template>

<script>
export default {
	name: 'Sharepost',

	methods: {
		sharePopup: function (url, title, width, height) {
			let popupWidth = width || 640
			let popupHeight = height || 320
			let popupPosX = window.screenX + window.innerWidth / 2 - popupWidth / 2
			let popupPosY = window.screenY + window.innerHeight / 2 - popupHeight / 2
			let popup = window.open(url, title, 'scrollbars=yes, menubar=0, location=0, status=0, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupPosY + ', left=' + popupPosX)

			popup.focus()
			return true
		},

		share: function (social) {
			let shareUrl = ''
			const pageUrl = encodeURIComponent(window.location.href)
			const pageTitle = encodeURIComponent(document.title)

			switch (social) {
			case 'twitter':
				shareUrl = 'https://twitter.com/intent/tweet?text=Nouvel Article ! ' + pageTitle + ' : ' + pageUrl + ' &via=EmmanuelBeziat'
				this.sharePopup(shareUrl, 'Partager sur Twitter')
				break

			case 'facebook':
				shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl
				this.sharePopup(shareUrl, 'Partager sur Facebook')
				break

			case 'linkedin':
				shareUrl = 'https://www.linkedin.com/shareArticle?url=' + pageUrl
				this.sharePopup(shareUrl, 'Partager sur LinkedIn')
				break

			case 'link':
				const dummyShare = document.createElement('input')
				document.body.appendChild(dummyShare)
				dummyShare.value = window.location.href
				dummyShare.select()
				document.execCommand('copy')
				document.body.removeChild(dummyShare)
				break
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.module-share
	--color-brand-twitter $color-brand-twitter
	--color-brand-facebook $color-brand-facebook
	--color-brand-codepen $color-brand-codepen
	--color-brand-github $color-brand-github
	--color-brand-linkedin $color-brand-linkedin

[class^="c-share"]
	display inline-block
	size rem(36px)
	padding .5em
	background var(--color-background-darker)
	border-radius 2px
	transition .5s ease-out
	overflow hidden
	border 0
	cursor pointer
	outline 0

	&:hover
	&:focus
		transition .2s ease-out

[class^="c-share"] + [class^="c-share"]
	margin-left rem(4px)

brand-icon(c-share--twitter, var(--color-brand-twitter))
brand-icon(c-share--facebook, var(--color-brand-facebook))
brand-icon(c-share--link, var(--color-violet))
brand-icon(c-share--linkedin, var(--color-brand-linkedin))

.c-share__icon
	color var(--color-text)
	line-height 1
	font-size rem(18px)

	&::before
		vertical-align middle
</style>
