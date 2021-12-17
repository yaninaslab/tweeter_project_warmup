import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import FeedPage from '@/views/FeedPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: "/feed",
    name: 'FeedPage',
    component: FeedPage
  },
]

const router = new VueRouter({
  routes
})

export default router
