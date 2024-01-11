<template>
	<header class="header" v-once ref="header">
		<h1 class="header__title animationBouncee"><router-link to="/">Emmanuel Béziat</router-link></h1>

		<Picture class="picture animationBounce" />

		<SocialLinks class="social animationBounce" />

		<div class="bio animationBounce">
			<p>Développeur web full-stack, passionné de code optimisé et moderne. Parfois formateur.</p>
			<p>Musicien à mes heures. Sportif monté en kit. Explorateur urbain.</p>
			<p>Mon meilleur atout ? L’adaptabilité. Donnez-moi du temps et de la doc, et je suis votre dev. <i class="emoji" role="img" aria-label="Emoji de salut militaire">🫡</i></p>
		</div>

		<div class="copyright animationBounce">
			<Copyright />
		</div>
	</header>
</template>

<script setup>
import Picture from '@/components/layout/Picture.vue'
import SocialLinks from '@/components/layout/Social.vue'
import Copyright from '@/components/layout/Copyright.vue'
</script>

<style scoped>
.header {
  padding: 2rem;
  background: var(--color-background-dark);
  position: relative;
  z-index: 10;
  text-align: center;
  grid-area: header;
}

.header__title {
  margin: 0;
  font-size: var(--font-size-heading-1);
  line-height: 1;
  font-weight: 400;
  animation-delay: 0.25s;
}

.picture {
  animation-delay: 0.35s;
}

.social {
  animation-delay: 0.45s;
}

.bio {
  margin: 2rem 0;
  animation-delay: 0.55s;
  text-wrap: balance;
}

@media (width <= 1120px) {
	.bio {
		display: none;
	}
}

.copyright {
  animation-delay: 0.65s;
}


@media (width <= 1120px) {
	.copyright {
		display: none;
	}
}

</style>
