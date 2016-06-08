<template>
	<header class="site-header">
		<h1 class="site-header__title">Emmanuel Béziat</h1>

		<div class="site-header__copyright">{{ copyright }}</div>
	</header>
</template>

<script>
export default {
	data () {
		return {
			copyright: '© ' + '2016' + ' Emmanuel Béziat'
		}
	}
}
</script>
