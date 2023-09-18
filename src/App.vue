<template>
	<div class="site">
		<Header />

		<div class="site-content">
			<SkipLinks position="top" />

			<Menu />

			<main class="main" id="content" tabindex="-1">
				<RouterView v-slot="{ Component }">
					<Transition mode="out-in" :name="$route.meta.transition || 'fade'">
						<component :is="Component" />
					</Transition>
				</RouterView>
			</main>

			<SkipLinks position="bottom" />
		</div>

		<Footer />
	</div>
</template>

<script setup>
import { openGraph } from '@/config'
import { useCodesStore } from './stores/codes'
import { usePostsStore } from './stores/posts'
import { usePortfolioStore } from './stores/portfolio'
import { useProjectsStore } from './stores/projects'
import { RouterView } from 'vue-router'
import { useHead, useSeoMeta } from '@vueuse/head'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Menu from '@/components/layout/Menu.vue'
import SkipLinks from '@/components/SkipLinks.vue'
// import ReloadPWA from '@/components/ReloadPWA.vue'

useCodesStore().fetch()
usePostsStore().fetch()
usePortfolioStore().fetch()
useProjectsStore().fetch()

useHead({
	title: 'Hello World',
	titleTemplate: (title) => `${openGraph.title} :: ${title}`,
})

useSeoMeta({
	description: openGraph.description,
	ogDescription: openGraph.description,
	ogImage: `${openGraph.url}${openGraph.image}`,
	ogUrl: openGraph.url,
	ogLocale: 'fr',
})
</script>

<style lang="stylus">
@require './assets/styles/variables.styl'
@require './assets/styles/mixins.styl'
@require './assets/styles/vendors/normalize.styl'
@require './assets/styles/vendors/prism.styl'

@require './assets/fonts/jetbrains-mono/jetbrains-mono.styl'
@require './assets/fonts/source-sans-pro/source-sans-pro.styl'
@require './assets/fonts/yanone-kaffeesatz/yanone-kaffeesatz.styl'

:root
	// Colors
	--color-background $color-black
	--color-text $color-white

	--color-green $color-green
	--color-blue $color-blue
	--color-violet $color-violet
	--color-yellow $color-yellow
	--color-red $color-red

	--color-separator $color-separator

	--color-background-light lighten($color-black, 5%)
	--color-background-lighter lighten($color-black, 25%)
	--color-background-dark darken($color-black, 10%)
	--color-background-darker darken($color-black, 25%)

	// fonts
	--font-stack-common $font-stack-common
	--font-stack-heading $font-stack-heading
	--font-stack-code $font-stack-code

	--font-size-base $font-size-base
	--font-size-title $font-size-title

	--font-size-heading-1 $font-size-heading-1
	--font-size-heading-2 $font-size-heading-2
	--font-size-heading-3 $font-size-heading-3
	--font-size-heading-4 $font-size-heading-4

	--font-size-logo $font-size-logo

	--font-size-article-title $font-size-article-title
	--font-size-article-title-small $font-size-article-title-small
	--font-size-article-infos $font-size-article-infos

	--font-size-menu $font-size-menu
	--font-size-quotes $font-size-quotes
	--font-size-code $font-size-code

	--transition-xfast .2s
	--transition-fast .25s
	--transition-normal .3s
	--transition-slow .5s

@media (prefers-reduced-motion)
	:root
		--transition-xfast 0s
		--transition-fast 0s
		--transition-normal 0s
		--transition-slow 0s

*
*::before
*::after
	box-sizing inherit

::selection
	background var(--color-blue)
	color var(--color-text)
	text-shadow 0 1px 0 rgba(0, 0, 0, .5)

@media (prefers-reduced-motion no-preference)
	:focus
		transition outline-offset var(--transition-fast) ease
		outline-offset 5px

html
	box-sizing border-box
	scrollbar-gutter stable
	scroll-behavior smooth

body
	--color-thumb var(--color-green)
	scroll-behavior smooth
	scrollbar-gutter stable

	&::-webkit-scrollbar-track
		background none

	&::-webkit-scrollbar
		width 12px
		background none

	&::-webkit-scrollbar-thumb
		border 2px solid var(--color-background)
		border-radius .5rem
		transition var(--transition-fast) ease-in-out
		background var(--color-thumb)

	&.portfolio
		--color-thumb var(--color-blue)

	&.projects
		--color-thumb var(--color-yellow)

	&.blog
		--color-thumb var(--color-red)

	&.me
		--color-thumb var(--color-violet)

	@media (prefers-reduced-motion reduce)
		scroll-behavior auto

body
	margin 0
	font 400 var(--font-size-base)/1.5 var(--font-stack-common)
	background var(--color-background)
	color var(--color-text)

h1
h2
h3
	font-family var(--font-stack-heading)
	font-weight 300
	margin 2em 0 .75em
	line-height 1

h2
	font-size var(--font-size-heading-2)
	color var(--color-green)

h3
	font-size var(--font-size-heading-3)
	line-height 1.5
	color var(--color-yellow)

i[lang]
	font-style normal

// Links
a
	background-color transparent
	transition var(--transition-xfast) ease-in-out
	color var(--color-green)
	text-decoration none

	&:hover
	&:focus
		color var(--color-yellow)
		outline none

img
	max-width 100%
	border-style none

// Quotes
blockquote
	position relative
	margin 2rem 0
	padding-left 4rem
	font 400 italic var(--font-size-quotes)/1.5em var(--font-stack-common)

blockquote::before
	content "“"
	position absolute
	left 0
	top 2rem
	font-size 6em
	color var(--color-background-lighter)

q
	font-style italic
	color var(--color-yellow)
	quotes "« " " »"

kbd
pre
code
	font-family var(--font-stack-code)

kbd
	background var(--color-separator)
	font-size .85rem
	border-radius .2em
	display inline-block
	padding 0 .35em
	border-bottom 1px solid var(--color-background-darker)
	margin 0 .05em

.flex
	display flex
	justify-content space-between
	align-items center

.site
	min-height 100dvh
	overflow-x hidden
	display grid
	grid-template-areas "header content"
	grid-template-columns 20rem auto

	@media $mq-desktop
		display block

	@media $mq-tablet
		padding-bottom rem(80px)

.site-content
	padding 2rem
	width 50rem
	margin 0 auto
	grid-area content

	@media $mq-desktop
		width auto

	@media $mq-tablet
		padding 2rem 1rem

.main
	margin 6rem auto 2rem
	outline 0

	@media $mq-desktop
		margin 2rem auto

@require './assets/styles/modules/notes.styl'
@require './assets/styles/modules/transitions.styl'
@require './assets/styles/helpers.styl'
// @require './assets/styles/easters.styl' // maybe someday…

@require './assets/styles/components/posts.styl'
</style>
