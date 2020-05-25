<template>
	<div>© {{ year }} Emmanuel Béziat</div>
</template>

<script>
import Moment from 'moment'

export default {
	data () {
		return {
			year: Moment().format('YYYY')
		}
	}
}
</script>
