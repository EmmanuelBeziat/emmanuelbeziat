<template>
	<div class="module-share">
		<button @click="share('twitter')" class="c-share--twitter"><i class="icon-twitter c-share__icon" aria-hidden="true"></i><span class="sr-only">Twitter</span></button>
		<button @click="share('facebook')" class="c-share--facebook"><i class="icon-facebook c-share__icon" aria-hidden="true"></i><span class="sr-only">Facebook</span></button>
		<button @click="share('google')" class="c-share--google-plus"><i class="icon-google-plus c-share__icon" aria-hidden="true"></i><span class="sr-only">Google+</span></button>
		<button @click="share('linkedin')" class="c-share--linkedin"><i class="icon-linkedin c-share__icon" aria-hidden="true"></i><span class="sr-only">LinkedIn</span></button>
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

			case 'google':
				shareUrl = 'https://plus.google.com/share?url=' + pageUrl
				this.sharePopup(shareUrl, 'Partager sur Google+')
				break

			case 'linkedin':
				shareUrl = 'https://www.linkedin.com/shareArticle?url=' + pageUrl
				this.sharePopup(shareUrl, 'Partager sur LinkedIn')
				break
			}
		}
	}
}
</script>

<style lang="stylus">
@require '~assets/styles/variables.styl'
@require '~assets/styles/mixins.styl'

[class^="c-share"]
	display inline-block
	size rem(36px)
	padding .5em
	background darken($color-background, 25%)
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
	margin-left $gutter-small

brand-icon(c-share--twitter, $color-brand-twitter)
brand-icon(c-share--facebook, $color-brand-facebook)
brand-icon(c-share--google-plus, $color-brand-google-plus)
brand-icon(c-share--linkedin, $color-brand-linkedin)

.c-share__icon
	color $color-text
	line-height 1
	font-size rem(18px)

	&::before
		vertical-align middle
</style>
