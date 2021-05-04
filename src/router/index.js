import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Menu from '../views/Menu.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import ThankYou from '../views/ThankYou.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({ name: 'Menu' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    beforeEnter: requireAuth
  },
  {
    path: '/contact-form',
    name: 'Contact',
    component: Contact,
    beforeEnter: requireAuth
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: requireAuth
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
