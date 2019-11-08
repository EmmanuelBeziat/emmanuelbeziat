import Vue from 'vue'

/**
 * @param {String} value
 * @return {String}
 */

Vue.filter('date', (value, options) => new Intl.DateTimeFormat('fr-FR', options).format(new Date(value)))
