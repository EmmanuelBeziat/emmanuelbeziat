<template>
	© {{ year }} Emmanuel Béziat
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
