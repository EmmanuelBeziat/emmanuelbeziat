<template>
	<header v-once ref="header" class="header">
		<div class="title animation-skew-y"><router-link to="/">Emmanuel Béziat</router-link></div>

		<Picture class="picture animation-bounce" />

		<SocialLinks class="social animation-bounce" />

		<div class="bio animation-bounce">
			<p>Développeur web full-stack, passionné de code optimisé et moderne. Parfois formateur.</p>
			<p>Musicien à mes heures. Sportif monté en kit. Explorateur urbain.</p>
			<p>Mon meilleur atout ? L’<b>adaptabilité</b>. Donnez-moi du temps et de la doc, et je suis votre dev. <i class="emoji" role="img" aria-label="Emoji de salut militaire">🫡</i></p>
		</div>

		<Copyright class="copyright animation-bounce" />
	</header>
</template>

<script setup>
import Picture from '@/components/global/Picture.vue'
import SocialLinks from '@/components/global/Social.vue'
import Copyright from '@/components/global/Copyright.vue'
</script>

<style scoped>
.header {
	padding: 2rem;
	background: var(--color-surface-dark);
	position: relative;
	z-index: 10;
	text-align: center;
	grid-area: header;
}

.title {
	margin-block: 0;
	font: 400 var(--font-size-title)/1 var(--font-stack-heading);
	animation-delay: .25s;
}

.picture {
	animation-delay: .35s;
}

.social {
	animation-delay: .45s;
}

.bio {
	margin-block: 2rem;
	animation-delay: .55s;
	text-wrap: balance;

	b {
		color: var(--color-green);
		font-weight: inherit;
	}

	@media (width <= 1120px) {
		display: none;
	}
}

.copyright {
	animation-delay: .65s;

	@media (width <= 1120px) {
		display: none;
	}
}

</style>
