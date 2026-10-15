<template>
	<article class="post">
		<h2 class="title">
			<slot name="title" />
		</h2>

		<aside class="infos">
			<div class="date">
				<slot name="date" />
			</div>

			<div class="tags">
				<slot name="tags" />
			</div>
		</aside>

		<div class="excerpt">
			<slot name="description" />
		</div>
	</article>
</template>

<style scoped>
.post {
	container-type: inline-size;
	transition: opacity var(--timing-fast) 0s;
	background: var(--back-body);
	opacity: 0;

	& + & {
		margin-top: 2.5em;
		padding-top: 2.5em;
		border-top: 1px solid var(--border-color);
	}
}

.infos {
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (width <= 620px) {
		flex-direction: column;
		align-items: start;
	}
}

.excerpt {
	margin-top: 1em;
}

.title {
	--list-article-title-font-size: var(--font-size-xl);

	margin: 0;
	color: var(--color-red);
	font: 400 var(--list-article-title-font-size)/1.25 var(--font-heading);
}

.date {
	color: var(--color-blue);

	@container (width <= 620px) {
		margin: .5em 0;
	}

	time {
		color: inherit;
	}
}

.tags {
	margin: .5em 0;
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
}
</style>
