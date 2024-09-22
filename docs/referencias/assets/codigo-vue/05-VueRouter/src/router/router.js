import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../modules/pokemon/layouts/PokemonLayout.vue'),
    children: [
      {
        path: '',
        name: 'pokemon-home',
        component: () => import('../modules/pokemon/pages/ListPage.vue'),
      },
      {
        path: 'about',
        name: 'pokemon-about',
        component: () => import('../modules/pokemon/pages/AboutPage.vue'),
      },
      {
        path: 'pokemon/:id',
        name: 'pokemon-id',
        component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? { id: 1 } : { id }
        },
      },
    ],
  },
  // Spiderman Layout
  {
    path: '/spiderman',
    name: 'spiderman',
    component: () => import('../modules/spiderman/layouts/SpidermanLayout.vue'),
    children: [
      {
        path: '',
        name: 'spiderman-home',
        component: () => import('../modules/spiderman/pages/Characters.vue'),
      },
      {
        path: 'about',
        name: 'spiderman-about',
        component: () => import('../modules/spiderman/pages/About.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('../modules/shared/NoPageFound.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
