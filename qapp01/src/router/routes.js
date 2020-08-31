
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: 'page1', name: 'page1', component: () => import('pages/page1.vue') },
      { path: 'page2', name: 'page2', component: () => import('pages/page2.vue') },
      { path: 'page3', name: 'page3', component: () => import('pages/page3.vue') },
      { path: 'login', name: 'login', component: () => import('pages/login.vue') },
      { path: 'login2', name: 'login2', component: () => import('pages/login2.vue') },
      { path: 'test', name: 'test', component: () => import('pages/test.vue') },
      { path: 'test2', name: 'test2', component: () => import('pages/test2.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
