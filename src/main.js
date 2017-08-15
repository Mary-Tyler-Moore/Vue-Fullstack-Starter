import Vue from 'vue';
import material from 'vue-material';

import App from './components/App.vue';

import store from './root';

Vue.use(material)

new Vue({
  el: '#app',
  store,
  render: handle => handle(App)
});