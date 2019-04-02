import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/user',
          component: () => import ('@/views/userManage/user-list')
        },
        {
          path: '/user/limit',
          component: () => import('@/views/userManage/limit')
        },
        {
          path: '/list',
          component: () => import('@/views/tableManage/list')
        },
        {
          path: '/list/dtl',
          component: () => import('@/views/tableManage/listDtls/index')
        },
        {
          path: '/index',
          component: () => import('@/views/indexManage')
        }
      ]
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/ad',
          alias: ['/ad/index'],
          component: () => import ('@/views/advertManage'),
          children: [
            {
              path: '/ad/add',
              component: () => import ('@/components/schema/form')
            },
            {
              path: '/ad/list',
              component: () => import('@/views/tableManage/list')
            }
          ]
        },
        {
          path: '/ads',
          alias: ['/ads/index'],
          component: () => import('@/views/advertManage/send'),
          redirect: '/ads/add',
          children: [
            {
              path: '/ads/add',
              component: () => import('@/components/schema/form')
            },
            {
              path: '/ads/fodder',
              component: () => import('@/views/advertManage/fodder')
            },
            {
              path: '/ads/mine',
              meta: {
                routerAlias: 'mine',
              },
              component: () => import('@/views/advertManage/mineAd')
            },
            {
              path: '/ads/mine/setting',
              meta: {
                routerAlias: 'mine'
              },
              component: () => import('@/views/advertManage/mineSetting')
            }
          ]
        },
        {
          path: '/fa',
          alias: ['/finance/index'],
          component: () => import('@/views/financeManage'),
          redirect: '/fa/recharge',
          children: [
            {
              path: '/fa/recharge',
              component: () => import ('@/components/schema/form')
            },
            {
              path: '/fa/list',
              component: () => import('@/views/tableManage/list')
            }
          ]
        },
        {
          path: '/fau',
          alias: ['/fanance/user', '/fanance/user/index'],
          component: () => import('@/views/financeManage/userIndex'),
          redirect: '/fau/user/recharge',
          children: [
            {
              path: '/fau/user/recharge',
              component: () => import('@/views/tableManage/list')
            },
            {
              path: '/fau/user/pay',
              component: () => import('@/views/tableManage/list')
            }
          ]
        },
        {
          path: '/data',
          alias: ['/data/index'],
          component: () => import('@/views/dataManage'),
          redirect: '/data/statistic',
          children: [
            {
              path: '/data/statistic',
              component: () => import('@/views/dataManage/statistic')
            },
            {
              path: '/data/list',
              component: () => import('@/views/tableManage/list')
            }
          ]
        }
      ]
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/bar',
          component: () => import('@/components/charts/bar')
        }
      ]
    },
    {
      path: '/signin',
      component: () => import ('@/views/signin')
    },
    {
      path: '*',
      component: () => import('@/components/error/404')
    },
    {
      path: '/403',
      component: () => import('@/components/error/403')
    },
    {
      path: '/500',
      meta: {isRequest: true},
      component: () => import('@/components/error/500')
    }
  ]
})
