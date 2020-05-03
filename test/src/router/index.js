import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Info from '../pages/Info';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // path
      name: 'home', // 遷移先で指定
      component: Home, // importしたcomponentを指定
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
  ],
});
