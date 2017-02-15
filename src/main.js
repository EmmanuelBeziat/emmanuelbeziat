import Vue from 'vue'
import router from './app/router.js'
import App from './App'

import vSvg from 'v-svg-directive'

Vue.use(vSvg, {
	path: '/static/sprite.svg',
	prefix: '',
	class: 'icon'
})

require('./app/boot')

const app = new Vue(
	Vue.util.extend({ router }, App)
).$mount('#app')

export { app, router }
