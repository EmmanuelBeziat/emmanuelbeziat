<template>
	<section class="resume">
		<hgroup class="card">
			<div class="card-hello animation-fade-bounce">Hello! Je suis</div>
			<h1 class="card-name animation-fade-bounce" ref="name">Emmanuel Béziat</h1>
			<div class="card-job animation-fade-bounce" ref="job">dev web <span>full-stack</span></div>
		</hgroup>

		<FloatingNote class="floating-note fn-age" :speedX="0.005" :speedY="0.025">
			<div class="resume-age">
				<Icon name="drawn-arrow" /><span>{{ age }} ans</span>
				<i>({{ nextBirthday }})</i>
			</div>
		</FloatingNote>

		<FloatingNote class="floating-note fn-note" :speedX="0.02" :speedY="0.01">
			<div class="resume-note">
				<Icon name="drawn-arrow" /> Très bon !
			</div>
		</FloatingNote>
	</section>
</template>

<script setup>
import { personal } from '@/config'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
// import isBetween from 'dayjs/plugin/isBetween'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import Icon from '@/components/Icon.vue'
import FloatingNote from '@/components/FloatingNote.vue'

let age = null
let nextBirthday = null

const checkAge = date => {
	nextBirthday = dayjs(date).set('year', dayjs().format('YYYY'))

	const birthday = dayjs(date)

	// dayjs.extend(isBetween)
	dayjs.extend(updateLocale)
	dayjs.extend(relativeTime)

	dayjs.updateLocale('fr', {
		relativeTime: {
			future: 'pour encore %s',
			past: 'depuis %s',
			s: 'quelques secondes',
			m: 'une minute',
			mm: '%d minutes',
			h: 'une heure',
			hh: '%d heures',
			dd: '%d jours',
			M: 'un mois',
			MM: '%d mois',
			y: 'un an',
			yy: '%d ans'
		}
	})

	/*
	const rangeMin = dayjs(nextBirthday).subtract(1, 'month')
	const rangeMax = dayjs(nextBirthday).add(1, 'month')
	if (dayjs().isBetween(rangeMin, rangeMax)) {
		isBirthdayMonth = true
	}
	*/

	age = Math.abs(dayjs(birthday).diff(dayjs(), 'years'))
	nextBirthday = dayjs(nextBirthday).fromNow()
}

dayjs.locale(fr)
checkAge(personal.birthday)
</script>

<style scoped>
.resume {
	position: relative;
	padding-bottom: 4rem;

	@media (width <= 768px) {
		padding-bottom: 0;
	}
}

.card {
  color: var(--color-light);
  font: 700 var(--font-size-heading-1)/1 var(--font-stack-common);
  margin-bottom: 80px;
  text-align: center;

	@supports (content-visibility: visible) {
		content-visibility: visible;
	}

	@container (width < 46rem) {
		font-size: var(--font-size-heading-3);
	}
}

.card-name {
  margin: 0;
  font: inherit;
  font-size: 80px;
  color: var(--color-blue);
  animation-delay: .55s;
  white-space: nowrap;
	font-size: clamp(var(--font-size-heading-3), 13cqi, 5ch);
	transition: .25s var(--ease-back-out);
}

.card-hello {
  text-align: left;
  animation-delay: .45s;
	transition: .25s var(--ease-back-out);
}

.card-job {
  animation-delay: .75s;
  text-align: right;
	transition: .25s var(--ease-back-out);

	span {
		color: var(--color-red);
		white-space: nowrap;
	}
}

.card-birthday {
  text-align: center;
  margin: 2em 2rem 0;
  animation-delay: .85s;
}

.floating-note {
	font: 400 1.75rem/1 var(--font-stack-hand);
	position: absolute;
	color: var(--color-green);
	opacity: 0;
	animation-name: footNotesIn;
	animation-duration: 2s;
  animation-fill-mode: forwards;

	@media (width <= 768px) {
		display: none;
	}
}

.fn-age :deep(.animation-fade-bounce) {
	animation-delay: 1.25s;
	animation-duration: 1s;
}

.fn-note :deep(.animation-fade-bounce) {
	animation-delay: 1.45s;
	animation-duration: 1.05s;
}

.fn-age {
	bottom: 6.25rem;
	left: -4%;
}

.fn-note {
	right: 5%;
	bottom: 8%;
}

.resume-age {
	transform: rotate(5deg);
	animation-delay: 1.25s;

	span {
		display: block;
		color: var(--color-green);
	}

	i {
		color: var(--color-light);
		font-style: normal;
		font-size: 80%;
		display: block;
		transform: translateX(-12%);
	}

	svg {
		fill: var(--color-blue);
		width: 90px;
		transform: translate(62px, 20px) rotate(-28deg) scaleX(-1);
	}
}

.resume-note {
	transform: rotate(-6deg);
	display: flex;
	align-items: center;
	animation-delay: 1.55s;

	svg {
		fill: var(--color-blue);
		width: 90px;
		transform: translate(12px, -30px) rotate(28deg);
	}
}

@keyframes footNotesIn {
	to {
		opacity: 1
	}
}
</style>
