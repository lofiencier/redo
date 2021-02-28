import VueRouter from 'vue-router';
import Index from '../pages/app';

const routes = [
  { path: '/', component: Index },
];

export default new VueRouter({ routes });