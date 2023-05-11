import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TalkView from '@/views/TalkView.vue'
import LearnView from '@/views/LearnView.vue'
import webView from '@/views/about/webView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    children: [
      {
        name: 'web',
        path: 'web',
        component: webView
      }
    ]
  },
  {
    path: '/talk',
    name: 'talk',
    component: TalkView
  },
  {
    path: '/learn',
    name: 'learn',
    component: LearnView
  }
]

const router = new VueRouter({
  routes
})

export default router
