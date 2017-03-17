<template>
	<section class="portfolio">
		<h1>Portfolio</h1>
	</section>
</template>

<script>
export default {
	transition (to, from) {
		if (!from) return 'slide-left'
		return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
	}
}
</script>
