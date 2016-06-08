<template>
	<section>
		<h1>Liste d'articles</h1>

		<article>
			<h1>{{ Article.title }}</h1>
			<div class="date">{{ Article.date }}</div>
			<p>{{ Article.content }}</p>
		</article>

		<article>
			<h1>{{ Article.title }}</h1>
			<div class="date">{{ Article.date }}</div>
			<p>{{ Article.content }}</p>
		</article>
	</section>
</template>

<script>
export default {
	data () {
		return {
			Article: {
				title: 'test de titre',
				date: '01 02 2016',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque facere fugit natus tempore porro quos voluptatem dolorem sint fuga vero. Neque quaerat obcaecati, harum qui ducimus quasi dicta quo necessitatibus.'
			}
		}
	}
}
</script>
