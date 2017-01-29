<template>
	<footer class="site-footer">
		<module-copyright></module-copyright>
	</footer>
</template>

<script>
import moduleCopyright from '../modules/Copyright'

export default {
	name: 'footer',
	components: {
		moduleCopyright
	}
}
</script>
