import Vue from 'vue'
import VueHead from 'vue-head'

import App from './App.vue'
import router from './router'

import './registerServiceWorker'
import './plugins/index'

Vue.config.productionTip = false
Vue.use(VueHead, {
	complement: 'Emmanuel Beziat',
	separator: ' :: ',
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
