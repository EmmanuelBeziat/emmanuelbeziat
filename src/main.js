import Vue from 'vue'
import VueHead from 'vue-head'
import Notifications from 'vue-notification'

import App from './App.vue'
import router from './router'
import store from './store.js'

import './registerServiceWorker'
import './plugins/index'

store.dispatch('codes/init')
store.dispatch('posts/init')
store.dispatch('portfolio/init')
store.dispatch('projects/init')

Vue.config.productionTip = false
Vue.use(VueHead, {
	complement: 'Emmanuel Beziat',
	separator: ' :: ',
})

Vue.use(Notifications)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
