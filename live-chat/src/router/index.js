import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '../Firebase/config'

const requireAuth = (to, from, next) => {
  const user = auth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}
const protectWelcome = (to, from, next) => {
  const user = auth.currentUser
  if (user) {
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: protectWelcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
