import Vue from 'vue';
import App from './app.vue';
import './styles/global.less';

Vue.mixin({
  computed: {
    console: () => console,
    window: () => window,
  }
});
new Vue({
  el: '#app',
  router: null,
  render: (h) => <App/>
});
