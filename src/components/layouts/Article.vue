<template>
	<article class="post">
		<header class="header animation-bounce">
			<h1 class="title">
				<slot name="title" />
			</h1>

			<div class="post-infos">
				<div class="date">
					<slot v-if="$slots.date" name="date" />
				</div>

				<div class="infos">
					<slot v-if="$slots.tags" name="tags" />
					<slot v-if="$slots.clients" name="clients" />
					<slot v-if="$slots.share" name="share" />
				</div>
			</div>
		</header>

		<div class="content animation-fade">
			<slot name="note" />
			<slot name="content" />
		</div>

		<footer class="footer animation-bounce">
			<div v-if="showFooterInfos" class="infos">
				<sequential-entrance v-if="$slots.tags" animation="animation-bounce" delay="125" class="tags">
					<slot name="tags" />
				</sequential-entrance>

				<slot v-if="$slots.share" name="share" />
			</div>

			<slot name="footer" />
		</footer>
	</article>
</template>

<script setup>
defineProps({
	showFooterInfos: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped>
.post {
	container-type: inline-size;
}

.header {
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-separator);
}

.title {
	margin-block: 0 .25em;
	color: var(--color-red);
	font: 400 var(--font-size-article-title)/1 var(--font-stack-heading);
}

.infos {
	display: flex;
	justify-content: space-between;
	align-items: center;

	@container (width <= 620px) {
		flex-direction: column;
		align-items: flex-start;
	}
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

.content {
	text-align: justify;
	opacity: 0;
	animation-delay: .45s;

	[target="_blank"]::after {
		content: "⇲";
		vertical-align: baseline;
		translate: 0 -4px;
		font-size: .85em;
		margin-left: .25em;
		display: inline-block;
	}
}

.footer {
	margin-top: 2rem;
	padding-top: 2rem;
	border-top: 1px solid var(--color-separator);
	animation-delay: .5s;
}

:deep(.tags) {
	display: flex;
	gap: 5px;
	flex-wrap: wrap;

	@container (width > 620px) {
		max-inline-size: 50%;
	}
}

:deep(.content h2) {
	position: relative;

	&:first-child {
		margin-top: 0;
	}

	.header-anchor {
		&::before {
			@media (hover: hover) {
				content: "#";
			}

			position: absolute;
			opacity: 0;
			transition-property: opacity, translate;
			transition-duration: var(--transition-xfast);
			transition-timing-function: var(--ease-back-out);
			translate: -75% 0;
			padding-right: 10px;
		}
	}

	@media (hover: hover) {
		&:hover .header-anchor::before {
			opacity: 1;
			translate: -100% 0;
		}
	}
}
</style>
