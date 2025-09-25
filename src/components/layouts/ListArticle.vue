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
	transition: opacity var(--transition-fast) 0s;
	background: var(--color-surface);
	opacity: 0;

	& + & {
		margin-top: 2.5em;
		padding-top: 2.5em;
		border-top: 1px solid var(--color-separator);
	}
}

.infos {
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (width <= 620px) {
		flex-direction: column;
		align-items: flex-start;
	}
}

.excerpt {
	margin-top: 1em;
}

.title {
	margin: 0;
	color: var(--color-red);
	font: 400 var(--font-size-article-title-small)/1.25 var(--font-stack-heading);
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
