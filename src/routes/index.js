import Vue from 'vue';
import Router from 'vue-router';
import components from '../pages/components';
import user from '../pages/user';

const lazyLoadRoute = AsyncView => {
  const AsyncHandler = () => ({
      component: AsyncView,
      loading: {
        template: '<p>loading....</p>'
      },
  });

  return Promise.resolve({
      functional: true,
      render(h, {data, children}) {
          // Transparently pass any props or children
          // to the view component.
          return h(AsyncHandler, data, children);
      }
  });
};

Vue.use(Router);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { 
    path: '/components', 
    component: () => lazyLoadRoute(import('../pages/components')),
  },
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