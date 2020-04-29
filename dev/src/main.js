import Vue from 'vue';
import App from './App.vue';
import router from './router';


new Vue({  
  router,
  render: h => h(App) // hyperscript jsx React.createElement を babel で h に変換
}).$mount('#app')
