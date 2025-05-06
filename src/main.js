import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import router from './router'
import SequentialEntrance from 'vue3-sequential-entrance'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)
app.use(SequentialEntrance)
app.mount('#emmanuelbeziat')

console.log('%c Made with 🕑 and 💖 by Emmanuel Béziat', 'background: #c3e88d; color: #233238; padding: .5em 1em;')
