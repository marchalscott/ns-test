import Vue from 'nativescript-vue'
import App from './components/App'
//import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(App)])
}).$start()

// This is a new comment March 6, 2019
// Marchal's Comment
// Marchal's second test!
// I cannot figure out how to get this to work on the playground!