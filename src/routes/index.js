import Vue from 'vue';
import Router from 'vue-router';
import components from '../pages/components';
import user from '../pages/user';

Vue.use(Router);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/components', component: components, name: 'components' },
  { 
    path: '/user/:id', component: user, 
    // =>params id => props
    props: true,
    children: [{
      path: 'reset',
      component: {
        template: '<div>reset</div>'
      }
    }]
  },
  { path: '*', component: require('../pages/404').default }
];
const router = new Router({ routes, mode: 'history', });
router.beforeEach((to, from, next) => {
  console.log('???');
  next();
});
export default router;