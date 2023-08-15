import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
=======
import { useUserStore } from "@/stores"
>>>>>>> 352cb1d (主页面主体搭建完成)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
<<<<<<< HEAD
            component: () => import('@/views/Main.vue')
=======
            component: () => import('@/views/Main.vue'),
            redirect:'/all',
            children: [
                {
                    path: '/all',
                    name: 'allSurvey',
                    component: () => import("@/views/Home/AllSurvey.vue")
                }
            ]
>>>>>>> 352cb1d (主页面主体搭建完成)
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/index.vue')
        }
    ]
})

<<<<<<< HEAD

=======
router.beforeEach((to) => {
    const userStore = useUserStore()
    if (!userStore.token && to.path != "/login") {
        return '/login'
    }
})
>>>>>>> 352cb1d (主页面主体搭建完成)

export default router