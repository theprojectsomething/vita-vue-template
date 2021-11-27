import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue'
import FourOhFour from '@/pages/FourOhFour.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    /* 404: this rule must appear last */
    {
      path: '/:pathMatch(.*)*',
      name: 'fourohfour',
      component: FourOhFour,
      beforeEnter(to, from, next) {
        to.meta.backlink = from.matched.length && from.name !== to.name ? from.path : '/';
        next();
      },
    },
  ],
})