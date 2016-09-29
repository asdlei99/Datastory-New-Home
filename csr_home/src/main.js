import Vue from 'vue'
import Router from './router'

import Normalize from 'normalize.css'
import BootstrapStyle from 'bootstrap/dist/css/bootstrap.min.css'
window.$ = window.jQuery = require('jquery/dist/jquery.min')
require('bootstrap/dist/js/bootstrap.min')

import CustomerService from './components/CustomerService/CustomerService'

var App = Vue.extend({
	el: () => '#app',
	events: {
		emitService: function() {
			this.$broadcast('emitService', 'service')
		},
		pageGoHook: function(obj) {
			this.$broadcast('pageGoHook', obj)
		}
	},
	components: {
		'customer-service': CustomerService
	}
})

Router.start(App, 'body')