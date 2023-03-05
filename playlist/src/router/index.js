import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePlaylist from '../views/CreatePlaylist.vue'
import PlaylistDetails from '../views/PlaylistDetails.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/auth/Login'
import Signup from '../views/auth/Signup'
import getUser from '@/composables/getUser'

const requireAuth = (to, from, next) => {
  const { user } = getUser()
  if (!user.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: CreatePlaylist,
    beforeEnter: requireAuth
  },
  {
    path: '/playlists/:id',
    name: 'PlaylistDetails',
    component: PlaylistDetails,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
