import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import { createHead } from '@egoist/vue-head'
import sequentialEntrance from 'vue3-sequential-entrance'
import './registerServiceWorker'
import './plugins/index'

store.dispatch('codes/init')
store.dispatch('posts/init')
store.dispatch('projects/init')
store.dispatch('portfolio/init')

const app = createApp(App)
const head = createHead()

app.use(store)
app.use(router)
app.use(head)
app.use(sequentialEntrance)
app.mount('#app')
