import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/overview',
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: () => import('../views/overview.vue'),
        },
      ],
    },
  ],
});

export default router;
