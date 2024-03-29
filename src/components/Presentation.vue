<template>
	<div class="card">
		<h1 class="presentation__title" ref="name">Emmanuel Béziat</h1>
		<div class="presentation__age" ref="age"><span>{{ age }} ans</span> ({{ nextBirthday }})</div>
		<div class="presentation__job" ref="job">Développeur web <span>front-end</span></div>
		<div class="presentation__birthday" ref="birthday" v-if="isBirthdayMonth">Si vous voulez m’offrir un petit cadeau, <br>vous pouvez consulter ma <a :href="amazonList">liste de souhaits Amazon </a>!</div>
	</div>
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

<style lang="stylus" scoped>
@require '../assets/styles/variables.styl'
@require '../assets/styles/mixins.styl'
@require '../assets/styles/modules/transitions.styl'

.card
	margin-bottom rem(80px)
	text-align center
	@supports (content-visibility auto)
		content-visibility auto

	@media $mq-tablet
		margin-bottom rem(60px)

	> *
		@extends .animationFadeBounce

.presentation__title
	margin 0
	font 400 rem(82px)/1 var(--font-stack-heading)
	color var(--color-blue)
	animation-delay .45s

	@media $mq-tablet
		font-size var(--font-size-heading-2)

.presentation__age
	display block
	font 400 var(--font-size-heading-1)/1 var(--font-stack-heading)
	animation-delay .55s

	@media $mq-tablet
		font-size var(--font-size-heading-2)

	span
		color var(--color-red)

.presentation__job
	font 400 var(--font-size-heading-1)/1 var(--font-stack-heading)
	color var(--color-green)
	margin-top .25em
	animation-delay .75s

	span
		white-space nowrap

	@media $mq-tablet
		font-size var(--font-size-heading-2)

.presentation__birthday
	text-align center
	margin 2em 2rem 0
	animation-delay .85s

.presentation__dev
	color var(--color-green)

	span
		color var(--color-yellow)
</style>
