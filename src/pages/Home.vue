<template>
	<section>
		<h1>Home</h1>
		<app-commits></app-commits>
	</section>
</template>

<script>
import appCommits from 'components/app-commits'

export default {
	data () {
		return {
		}
	},

	components: {
		appCommits
	}
}

</script>
