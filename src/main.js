import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import sequentialEntrance from 'vue3-sequential-entrance'
import './registerServiceWorker'

store.dispatch('codes/init')
store.dispatch('posts/init')
store.dispatch('projects/init')
store.dispatch('portfolio/init')

const app = createApp(App)

app.use(store)
app.use(router)
app.use(sequentialEntrance)
app.mount('#app')
