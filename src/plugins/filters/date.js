import Vue from 'vue'

/**
 * @param {String} value
 * @return {String}
 */

Vue.filter('date', (value) => new Intl.DateTimeFormat('fr-FR').format(new Date(value)))
