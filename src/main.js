import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import './registerServiceWorker'
import './plugins/index'
import sequentialEntrance from './plugins/modules/sequential-entrance'

store.dispatch('codes/init')
store.dispatch('posts/init')
store.dispatch('projects/init')
store.dispatch('portfolio/init')

createApp(App).use(store).use(router).use(sequentialEntrance).mount('#app')
