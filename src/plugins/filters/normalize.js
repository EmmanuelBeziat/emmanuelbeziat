import Vue from 'vue'
import removeAccents from 'remove-accents'

/**
 * @return {String}
 */
Vue.filter('normalize', (value) => removeAccents(value))
