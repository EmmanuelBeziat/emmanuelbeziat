<template>
	<header class="site-header">
		<h1 class="site-header__title"><a class="site-header__link" v-link="{ name: 'home', exact: true, activeClass: 'site-header__link--active' }">Emmanuel Béziat</a></h1>

		<app-resume></app-resume>

		<div class="site-header__copyright">{{ copyright }}</div>
	</header>
</template>

<script>
import appResume from '../components/app-resume'

export default {
	data () {
		return {
			copyright: '© ' + '2016' + ' Emmanuel Béziat'
		}
	},

	components: {
		appResume
	}
}
</script>
