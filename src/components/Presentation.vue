<template>
	<hgroup class="card">
		<div class="presentation__hello animationFadeBounce">Hello! Je suis</div>
		<h1 class="presentation__title animationFadeBounce" ref="name">Emmanuel Béziat</h1>
		<div class="presentation__job animationFadeBounce" ref="job">dev <span>full-stack</span> senior</div>
	</hgroup>
	<div class="presentation__age" ref="age"><span>{{ age }} ans</span> ({{ nextBirthday }})</div>
	<div class="presentation__birthday" ref="birthday" v-if="isBirthdayMonth">Si vous voulez m’offrir un petit cadeau, <br>vous pouvez consulter ma <a :href="amazonList">liste de souhaits Amazon </a>!</div>
</template>

<script setup>
import { personal } from '@/config'
import { computed } from 'vue'
import dayjs from 'dayjs'
import fr from 'dayjs/locale/fr'
import isBetween from 'dayjs/plugin/isBetween'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

let age = null
let nextBirthday = null
let isBirthdayMonth = false

const amazonList = computed(() => {
	const i = Math.floor(Math.random() * personal.amazonLists.length)
	return personal.amazonLists[i].url
})

const checkAge = date => {
	nextBirthday = dayjs(date).set('year', dayjs().format('YYYY'))

	const birthday = dayjs(date)
	const rangeMin = dayjs(nextBirthday).subtract(1, 'month')
	const rangeMax = dayjs(nextBirthday).add(1, 'month')

	dayjs.extend(isBetween)
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

	if (dayjs().isBetween(rangeMin, rangeMax)) {
		isBirthdayMonth = true
	}

	age = Math.abs(dayjs(birthday).diff(dayjs(), 'years'))
	nextBirthday = dayjs(nextBirthday).fromNow()
}

dayjs.locale(fr)
checkAge(personal.birthday)
</script>

<style scoped>
.card {
  color: var(--color-subwhite);
  font: 700 var(--font-size-heading-1)/1 var(--font-stack-common);
  margin-bottom: 80px;
  text-align: center;
  container-type: inline-size;
}

@supports (content-visibility: auto) {
  .card {
    content-visibility: auto;
  }
}

@media (width <= 768px) {
	.card {
		font-size: var(--font-size-heading-2);
	}
}
.presentation__title {
  margin: 0;
  font: inherit;
  font-size: 80px;
  color: var(--color-blue);
  animation-delay: 0.55s;
  white-space: nowrap;
}

@supports (font-size: 1cqi) {
  .presentation__title {
    font-size: clamp(var(--font-size-heading-2), 13cqi, 5ch);
  }
}

.presentation__hello {
  text-align: left;
  animation-delay: 0.45s;
}

.presentation__age {
  display: block;
  animation-delay: 0.55s;
}

.presentation__age span {
  color: var(--color-red);
}

.presentation__job {
  animation-delay: 0.75s;
  text-align: right;
}

.presentation__job span {
  white-space: nowrap;
}

.presentation__birthday {
  text-align: center;
  margin: 2em 2rem 0;
  animation-delay: 0.85s;
}

.presentation__dev {
  color: var(--color-green);
}

.presentation__dev span {
  color: var(--color-yellow);
}

</style>
