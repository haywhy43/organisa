export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/authentication')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/authentication')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
            requiresAuth: true
        },
        component: () => import('@/views/authentication')
    }
]
