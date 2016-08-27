<template>
	{{ copyright }}
</template>

<script>
import Moment from 'moment'

export default {
	data () {
		return {
			copyright: '© ' + Moment().format('YYYY') + ' Emmanuel Béziat'
		}
	}
}
</script>
