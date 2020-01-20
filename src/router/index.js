import Vue from 'vue';
import VueRouter from 'vue-router';
import Authentication from '@/views/Authentication.vue';
import Registration from '@/views/Registration.vue';
import Verification from '@/views/Verification.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'authentication',
    component: Authentication,
  },
  {
    path: '/register',
    name: 'registration',
    component: Registration,
  },
  {
    path: '/verify',
    name: 'verification',
    component: Verification,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
