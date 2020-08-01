<template>
	<div>© {{ year }} Emmanuel Béziat</div>
</template>

<script>
import Moment from 'moment'

export default {
	name: 'Copyright',

	data () {
		return {
			year: Moment().format('YYYY')
		}
	}
}
</script>
