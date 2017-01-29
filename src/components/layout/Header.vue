<template>
	<header class="site-header">
		<h1 class="site-header__title"><a class="site-header__link" href="NIQUETA RACE">Emmanuel Béziat</a></h1>

		<img class="site-header__picture" src="../../assets/images/emmanuelb.jpg" alt="Emmanuel Béziat" width="220" height="220">

		<div class="social">
			<a :href="social.twitter" class="social__link social__link--twitter">
				<!-- <svg v-svg class="icon social__icon" sprite="twitter"></svg><span class="sr-only">Twitter</span> -->
			</a>
			<a :href="social.facebook" class="social__link social__link--facebook">
				<!-- <svg v-svg class="icon social__icon" sprite="facebook"></svg><span class="sr-only">Facebook</span> -->
			</a>
			<a :href="social.github" class="social__link social__link--github">
				<!-- <svg v-svg class="icon social__icon" sprite="github"></svg><span class="sr-only">Github</span> -->
			</a>
			<a :href="social.linkedin" class="social__link social__link--linkedin">
				<!-- <svg v-svg class="icon social__icon" sprite="linkedin"></svg><span class="sr-only">LinkedIn</span> -->
			</a>
			<a :href="social.codepen" class="social__link social__link--codepen">
				<!-- <svg v-svg class="icon social__icon" sprite="codepen"></svg><span class="sr-only">Codepen</span> -->
			</a>
		</div>

		<div class="site-header__bio">
			<p>jeune développeur web perpignanais passionné de geekeries</p>
			<p>je travaille chez <a href="http://www.italic.fr/">Italic</a>, une chouette web-agency à paris</p>
			<p>et je suis également formateur web à l’<a href="http://www.lidem.eu/">IDEM</a>, dans le sud plein de soleil</p>
		</div>

		<div class="site-header__copyright">
			<module-copyright></module-copyright>
		</div>
	</header>
</template>

<script>
import moduleCopyright from '../modules/Copyright'

export default {
	name: 'header',
	data () {
		return {
			social: {
				twitter: 'https://twitter.com/EmmanuelBeziat',
				facebook: 'https://www.facebook.com/EmmanuelBeziat',
				github: 'https://github.com/EmmanuelBeziat',
				linkedin: 'https://www.linkedin.com/in/emmanuel-b-54242949',
				codepen: 'http://codepen.io/EmmanuelBeziat/'
			}
		}
	},

	components: {
		moduleCopyright
	}
}
</script>
