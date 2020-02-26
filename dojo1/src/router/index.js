import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import About from '../views/About.vue';
import Logoff from '../views/Logoff.vue';
import Dashboard from '../views/Dashboard.vue';
import store from '../store';


const storeVar = store;

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
    beforeEnter(to, from, next) {
      if (storeVar.getters.stToken === '123456') {
        next();
      } else {
        next({
          name: 'login',
        });
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/logoff',
    name: 'logoff',
    component: Logoff,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
];


const router = new VueRouter({
  routes,
});

export default router;
