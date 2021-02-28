import Vue from 'vue';
import './styles/global.less';
import router from './routes';
import App from './app';

Vue.mixin({
  computed: {
    console: () => console,
    window: () => window,
  }
});
new Vue({
  router,
  render: h => <App />
}).$mount('#app');
