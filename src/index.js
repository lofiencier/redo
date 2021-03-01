import Vue from 'vue';
import './styles/global.less';
import router from './routes';
import App from './app';
import store from './store';

Vue.config.devtools = true;
Vue.mixin({
  computed: {
    console: () => console,
    window: () => window,
  }
});
new Vue({
  router,
  render: h => <App />,
  store,
}).$mount('#app');
