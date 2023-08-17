import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "@/stores"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/views/Main.vue'),
            redirect: '/allSurvey',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import("@/views/Home/index.vue"),
                    children: [
                        {
                            path: '/allSurvey',
                            name: 'allSurvey',
                            component: () => import("@/views/Home/AllSurvey.vue")
                        },
                        {
                            path: '/favorites',
                            name: 'favorites',
                            component: () => import("@/views/Home/Favorites.vue")
                        }
                    ]
                },
                {
                    path: '/newSurvey',
                    name: 'newSurvey',
                    component: () => import('@/views/NewSurvey/index.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login/index.vue')
        }
    ]
})

router.beforeEach((to) => {
    const userStore = useUserStore()
    if (!userStore.token && to.path != "/login") {
        return '/login'
    }
})

export default router