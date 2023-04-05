import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:HomeView
    },

    //Per gli altri percorsi utilizzo il caricamento pigro della componente
    {
      path:"/posts",
      name:"posts",
      component:() => import('../views/PostView.vue')

    },
    {
      path:"/comments",
      name:"comments",
      component: () => import('../views/CommentView.vue')
    }
  ]
})

export default router
