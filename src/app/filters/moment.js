import Vue from 'vue'
import Moment from 'moment'
Moment.locale('fr')

/**
 * Moment.js - http://moment.jscom/docs/#/displaying/
 * @param  {String} format
 * @return {String}
 */
Vue.filter('moment', (value, format) => Moment(value).format(format))
