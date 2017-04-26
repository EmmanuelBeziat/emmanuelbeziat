import Vue from 'vue'
import vSvg from 'v-svg-directive'

Vue.use(vSvg, {
	path: '/img/sprite.svg',
	prefix: '',
	class: 'icon'
})
