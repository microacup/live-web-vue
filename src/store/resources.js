import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;

const API_BASE_URL = 'http://localhost:3000/api/';

export const ChannelResource = Vue.resource(`${API_BASE_URL}channels`);
export const UserResource = Vue.resource(`${API_BASE_URL}users`);