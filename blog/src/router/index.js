import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details'
import Create from '../views/Create'
import Tags from '../views/Tags'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/add',
    name: 'Create',
    component: Create,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'Tags',
    component: Tags,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
