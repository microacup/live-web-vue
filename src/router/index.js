import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: resolve => require(['../views/web/Index'], resolve) },
    { path: '/all', component: resolve => require(['../views/web/All'], resolve) },
    { path: '/live/:id', component: resolve => require(['../views/web/Live'], resolve) },
  ],
});
