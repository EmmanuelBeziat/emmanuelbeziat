<template>
	<RouterLink class="menu__item" :class="!isActive || '-active'" :to>
			<Icon :name="icon" />
		{{ label }}
	</RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Icon from '@/components/icon/Icon.vue'

const props = defineProps({
	to: {
		type: Object,
		required: true
	},
	exact: {
		type: Boolean
	},
	label: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		require: true
	}
})

const router = useRouter()
const route = useRoute()
const isActive = computed(() => router.resolve(props.to).path === '/' + route.path.split('/')[1])
</script>

<style scoped>
.menu__item {
  --link-color: var(--color-text);
  font: 400 var(--font-size-menu)/1 var(--font-stack-heading);
  text-decoration: none;
  color: var(--link-color);
  position: relative;
}
@media (width <= 768px) {
  .menu__item {
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    flex: 1;
    padding: 8px;
  }
}
.menu__item::before,
.menu__item::after {
  display: inline-block;
  opacity: 0;
  transition: var(--transition-normal) ease-in-out;
  color: var(--color-text);
  content: var(--content);
}
@media (width <= 768px) {
  .menu__item::before,
  .menu__item::after {
    display: none;
  }
}
.menu__item::before {
  --content: "<";
  transform: translateX(20px);
  padding-right: 0.125em;
}
.menu__item::after {
  --content: "/>";
  transform: translateX(-20px);
  padding-left: 0.1875em;
}
.menu__item :deep(svg) {
  display: none;
  transform: none;
  padding: 0;
  opacity: 1;
  width: 24px;
  aspect-ratio: 1/1;
  margin: 0 auto 5px;
  fill: currentColor;
}
@media (width <= 768px) {
  .menu__item :deep(svg) {
    display: block;
  }
}
.menu__item:hover,
.menu__item:focus {
  color: var(--link-color-hover);
}
.-active {
  color: var(--link-color-active);
}
.-active[href="/"] {
  --link-color-hover: var(--color-green);
  --link-color-active: var(--color-green);
}
.-active[href="/portfolio"] {
  --link-color-hover: var(--color-blue);
  --link-color-active: var(--color-blue);
}
.-active[href="/projets"] {
  --link-color-hover: var(--color-yellow);
  --link-color-active: var(--color-yellow);
}
.-active[href="/blog"] {
  --link-color-hover: var(--color-red);
  --link-color-active: var(--color-red);
}
.-active[href="/moi"] {
  --link-color-hover: var(--color-violet);
  --link-color-active: var(--color-violet);
}
.-active:hover::before,
.-active:hover::after {
  color: var(--link-color-hover);
}
.-active::before,
.menu__item:hover::before,
.menu__item:focus::before,
.-active::after,
.menu__item:hover::after,
.menu__item:focus::after {
  opacity: 1;
  transform: translateX(0);
}

</style>
