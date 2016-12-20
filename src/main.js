// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import VideoPlayer from 'vue-video-player';
import FastClick from 'fastclick';
import { sync } from 'vuex-router-sync';
import 'es6-promise/auto';
import App from './App';

// import App from './App';
import store from './store';
import router from './router';
import './scss/app.scss';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

Vue.use(ElementUI);

FastClick.attach(document.body);

VideoPlayer.config({
  switcher: true,
  hls: true,
});
Vue.use(VideoPlayer);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({
  router,
  store,
}, App)).$mount('#app');
