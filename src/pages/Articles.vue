<template>
	<section>
		<h1>Liste d'articles</h1>

		<article>
			<h1>{{ Article.title }}</h1>
			<div class="date">{{ Article.date }}</div>
		</article>
	</section>
</template>

<script>
export default {
	data () {
		return {
			Article: {
				title: 'test de titre',
				date: '01 02 2016'
			}
		}
	}
}
</script>
