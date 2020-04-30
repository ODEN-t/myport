require('intersection-observer'); // polyfill
import Vue from 'vue';
import VueObserveVisibility from 'vue-observe-visibility';
Vue.use(VueObserveVisibility);

import App from './App.vue';
import router from './router';


new Vue({  
  directives: {
    VueObserveVisibility
  },
  router,
  render: h => h(App) // hyperscript jsx React.createElement を babel で h に変換
}).$mount('#app')
