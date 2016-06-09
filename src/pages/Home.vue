<template>
	<section>
		<h1>Home</h1>
		<app-tweets></app-tweets>
		<app-commits></app-commits>
	</section>
</template>

<script>
import appCommits from 'components/app-commits'
import appTweets from 'components/app-tweets'

export default {
	data () {
		return {
		}
	},

	components: {
		appCommits,
		appTweets
	}
}

</script>
