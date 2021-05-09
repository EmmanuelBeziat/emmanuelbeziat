<template>
	<section class="home">
		<div class="presentation">
			<Presentation />
			<CodeHome />
		</div>
	</section>
</template>

<script>
import Presentation from '@/views/home/Presentation'
import CodeHome from '@/views/home/Code'

export default {
	name: 'Home',

	components: {
		Presentation,
		CodeHome
	}
}
</script>
