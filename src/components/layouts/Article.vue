<template>
	<article class="post">
		<header class="header animation-bounce">
			<h1 class="title">
				<slot name="title" />
			</h1>

			<div class="post-infos">
				<div class="date">
					<slot name="date" v-if="$slots.date" />
				</div>

				<div class="infos">
					<slot name="tags" v-if="$slots.tags" />
					<slot name="clients" v-if="$slots.clients" />
					<slot name="share" v-if="$slots.share" />
				</div>
			</div>
		</header>

		<div class="content animation-fade">
			<slot name="content" />
		</div>

		<footer class="footer animation-bounce">
			<div class="infos" v-if="showFooterInfos">
				<sequential-entrance animation="animation-bounce" delay="125" class="tags"  v-if="$slots.tags">
					<slot name="tags" />
				</sequential-entrance>

				<slot name="share" v-if="$slots.share" />
			</div>

			<slot name="footer" />
		</footer>
	</article>
</template>

<script setup>
const props = defineProps({
	showFooterInfos: {
		type: Boolean,
		default: false
	}
})
</script>

<style scoped>
.post {
	container-type: inline-size;

	.footer {
		animation-delay: .5s;
	}

	.content {
		opacity: 0;
		animation-delay: .45s;
	}
}

.header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-separator);

	.title {
		line-height: 1;
		margin-bottom: .25em;
	}
}

.title {
  margin: 0;
  color: var(--color-red);
  font: 400 var(--font-size-article-title)/1.25 var(--font-stack-heading);
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

	:where(h2, h3, h4, h5) {
		position: relative;
	}

	[target="_blank"]::after {
		content: "⇲";
		vertical-align: baseline;
		transform: translateY(-4px);
		font-size: .85em;
		margin-left: .25em;
		display: inline-block;
	}
}

:deep(.content h2:first-child) {
	margin-top: 0;
}

.footer {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-separator);
}

:deep(.tags) {
  margin: .5em 0;
	max-width: 50%;
  display: flex;
  gap: 5px;
	flex-wrap: wrap;

	@container (width <= 620px) {
		margin: .5em 0;
		max-width: none;
	}
}

:deep(.content h2) {
	position: relative;
}

:deep(.anchor) {
	position: absolute;
	left: 0;
	top: .35em;
	opacity: 0;
	font-size: .65em;
	transition: var(--transition-xfast) ease-in-out;
	transform: translateX(-75%);
	padding-right: 10px;
}

:deep(h2:hover .anchor) {
	opacity: 1;
	transform: translateX(-100%);
}
</style>
