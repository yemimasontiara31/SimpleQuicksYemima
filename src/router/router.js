// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import CircleMenu from '@/components/CircleMenu.vue';
import MessageInbox from '@/components/MessageInbox.vue';
// import TasksQuicks from '@/components/TasksQuicks.vue';

const routes = [
  { path: '/', component: CircleMenu },
  { path: '/message', component: MessageInbox },
  // { path: '/tasks', component: TasksQuicks },
  // ... add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
