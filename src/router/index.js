import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Search = () => import('../views/search/search.vue')

const Liuxing = () => import('../views/home/components/router-view/liuxing.vue')
const Xinkuan = () => import('../views/home/components/router-view/xinkuan.vue')
const Jingxuan = () => import('../views/home/components/router-view/jingxuan.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'liuxing'
      },
      {
        path: 'liuxing',
        component: Liuxing
      },
      {
        path: 'xinkuan',
        component: Xinkuan
      },
      {
        path: 'jingxuan',
        component: Jingxuan
      }
    ]
  },
  {
    path: '/category',
    component: Category,
    children: [
      {
        path: '',
        redirect: 'yrf'
      },
      {
        path: 'yrf',
        component: () => import('../views/category/components/router-view/yrf.vue')
      },
      {
        path: 'my',
        component: () => import('../views/category/components/router-view/my.vue')
      },
      {
        path: 'kz',
        component: () => import('../views/category/components/router-view/kz.vue')
      },
      {
        path: 'xz',
        component: () => import('../views/category/components/router-view/xz.vue')
      },
      {
        path: 'wy',
        component: () => import('../views/category/components/router-view/wy.vue')
      },
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: () => import('../views/detail/detail.vue'),
  },
  {
    path: '/denglu',
    component: () => import('../views/denglu/denglu.vue')
  },
  {
    path: '/shopping',
    component: () => import('../views/shopping/shopping.vue')
  },
  {
    path: '/dingdan',
    component: () => import('../views/dingdan/dingdan.vue'),
    children: [
      {
        path: '',
        redirect: 'quanbu'
      },
      {
        path: 'quanbu',
        component: () => import('../views/dingdan/router/quanbu.vue')
      },
      {
        path: 'wcl',
        component: () => import('../views/dingdan/router/wcl.vue')
      },
      {
        path: 'ycl',
        component: () => import('../views/dingdan/router/ycl.vue')
      },
    ]
  },
  {
    path: '/shoucang',
    component: () => import('../views/shoucang/shoucang.vue')
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/dianpu',
    component: () => import('../views/dianpu/dianpu.vue')
  },
  {
    path: '/pinglun',
    component: () => import('../views/pinglun/pinglun.vue')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})


export default router