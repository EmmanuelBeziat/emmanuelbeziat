<template>
	<header class="site-header">
		<h1 class="site-header__title">Emmanuel Béziat</h1>

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
