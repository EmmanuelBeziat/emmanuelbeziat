<template>
	<section class="not-found">
		<div class="not-found__image animation-bounce" @click="$router.go()">
			<img :src="error.image" alt="error" loading="lazy">
		</div>
		<div class="not-found__404 animation-bounce" v-html="error.title"></div>

		<h1 class="not-found__title animation-bounce">Page introuvable</h1>
		<div class="not-found__content animation-bounce">
			<p>Et voilà, vous avez tout cassé… Et qui c’est qui doit réparer tout ça maintenant ?</p>
			<p>Oooh, mais c’est pas grave, hein ? Y’a toujours un « informaticien » pour tout régler, pas vrai ?! <br>Après tout, c’est mon métier, alors ça n’a rien de compliqué… En plus c’est même pas un vrai métier : c’est l’ordinateur qui fait tout.</p>
			<p>Pfff…</p>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { selectRandomItem } from '@/plugins/mixins/randomize'

const errors = [
	{ image: 'doctor-who.avifs', title: 'What?!' },
	{ image: 'south-park.avifs', title: 'We’re sorry…' },
	{ image: 'mario.webp', title: 'Sorry, but your page <br>is in another castle' },
	{ image: 'obiwan.avifs', title: 'This is not the page <br>you’re looking for…' },
	{ image: 'pulp-fiction.avifs', title: '…?' },
	{ image: 'arya-got.avifs', title: 'A page has no name' },
	{ image: 'toy-story.avifs', title: 'There seem to be no sign <br>of this page anywhere'},
	// { image: 'jurassic-park.avifs', title: 'This page is extinct'},
]
const error = computed(() => {
	const errorIndex = selectRandomItem(errors, 'lastErrorIndex')
	return {
		title: errors[errorIndex].title,
		image: new URL(`../assets/images/404/${errors[errorIndex].image}`, import.meta.url)
	}
})

useHead({
	title: 'Erreur !'
})
</script>

<style scoped>
.not-found {
  text-align: center;
}

.not-found__image {
  width: 16rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: 4rem auto 0;
  background: transparent 50% 50% no-repeat;
  background-size: cover;
  overflow: hidden;

	@media (width <= 992px) {
		margin-top: 0;
	}
}

.not-found__image img {
  display: block;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
}

.not-found__404 {
  font: 400 5.125rem/1 var(--font-stack-heading);
  margin: .5em 0 .25em;
  color: var(--color-green);
  animation-delay: .3s;

	@media (width <= 992px) {
		font-size: 3.25rem;
		margin-bottom: 2rem;
	}
}

.not-found__title {
  font: 400 var(--font-size-heading-2)/1.5 var(--font-stack-heading);
  margin-top: 0;
  animation-delay: .35s;
}

.not-found__content {
  max-width: 21.5rem;
  text-align: justify;
  margin: auto;
  animation-delay: .4s;
}
</style>
