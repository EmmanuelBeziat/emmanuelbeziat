import Vue from 'vue'
import router from './app/router.js'
import App from './App'

/* import svg from 'vue-svg-directive'

Vue.use(svg, {
	sprites: '/static/temp.sprite.svg',
	prefix: '',
	class: 'icon'
})*/

require('./app/boot')

const app = new Vue(
	Vue.util.extend({ router }, App)
).$mount('#app')

export { app, router }
