<template>
	<div class="loader">
		<svg width="100" x="50%" y="0px" viewBox="0 0 100 100">
			<circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
				<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>
			</circle>
			<circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
				<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>
			</circle>
			<circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
				<animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>
			</circle>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'Loader'
}
</script>

<style lang="stylus" scoped>
.loader
	display flex
	justify-content center
</style>
