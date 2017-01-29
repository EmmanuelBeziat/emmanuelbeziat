import Vue from 'vue'
import router from './app/router.js'
import App from './App'

const app = new Vue(
	Vue.util.extend({ router }, App)
).$mount('#app')

export { app, router }
