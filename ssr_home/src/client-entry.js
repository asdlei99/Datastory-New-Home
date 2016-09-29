require('es6-promise').polyfill()
// require('normalize.css')
// require('bootstrap/dist/css/bootstrap.min.css')
window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
require('bootstrap/dist/js/bootstrap.min.js')

import { app, router, store } from './app'

store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app');

