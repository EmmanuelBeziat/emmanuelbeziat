<template>
	<section :class="sectionClass">
		<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

		<template v-if="items.length">
			<sequential-entrance animation="animation-fade" delay="100" class="post-list">
				<slot name="item" :items="items" />
			</sequential-entrance>
		</template>

		<NoContent v-else />
	</section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { openGraph } from '@/config'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import slug from 'slug'

import Search from '@/components/Search.vue'
import NoContent from '@/components/loader/NoContent.vue'

const props = defineProps({
  sectionClass: {
    type: String,
    required: true
  },
  searchPlaceholder: {
    type: String,
    required: true
  },
  store: {
    type: Object,
    required: true
  },
  itemKey: {
    type: String,
    required: true
  }
})

const searchTerms = ref('')
const route = useRoute()
const fullURL = computed(() => openGraph.url + route.fullPath)
const items = computed(() => props.store.list.filter(item => slug(item[props.itemKey].toLowerCase()).includes(slug(searchTerms.value.toLowerCase()))))

onMounted(() => {
  defineNamespace(props.sectionClass)
})

useHead({
  title: props.sectionClass.charAt(0).toUpperCase() + props.sectionClass.slice(1)
})

useSeoMeta({
  ogUrl: fullURL,
})
</script>

<style scoped>
.post-list {
  display: grid;
}
</style>
