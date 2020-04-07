export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/authentication'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/authentication'),
    },
    {
        path: '/',
        name: 'Dashboard',
        meta: {
            requiresAuth: true,
        },
        component: () => import('@/views'),
    },
]
