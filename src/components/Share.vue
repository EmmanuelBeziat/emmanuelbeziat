<template>
	<div class="module-share">
		<button @click="share('twitter')" class="c-social--twitter"><svg v-svg="'twitter'" class="icon social__icon"></svg><span class="sr-only">Twitter</span></button>
		<button @click="share('facebook')" class="c-social--facebook"><svg v-svg="'facebook'" class="icon social__icon"></svg><span class="sr-only">Facebook</span></button>
		<button @click="share('google')" class="c-social--google-plus"><svg v-svg="'google-plus'" class="icon social__icon"></svg><span class="sr-only">Google+</span></button>
		<button @click="share('linkedin')" class="c-social--linkedin"><svg v-svg="'linkedin'" class="icon social__icon"></svg><span class="sr-only">LinkedIn</span></button>
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
