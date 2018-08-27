import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/MyArticle',
      name: 'MyArticle',
      component: () => import('./views/MyArticle.vue'),
      children:[
    {
      path:'/MyArticle/AddArticle',
      name:'AddArticle',
      component:() => import('./components/AddArticleForm.vue')
    },
    {
      path:'/MyArticle/DeleteArticle/:id',
      name:'DeleteArticle'
    },
    {
      path:'/MyArticle/UpdateArticle/:id',
      name:'EditArticle',
      component: () => import ('./components/EditArticleForm.vue')
    }]
    }
  ]
})
