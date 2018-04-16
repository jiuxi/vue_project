import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/content/:id',
      component: Content,
      meta: {needLogin: true}
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) { // 这里meta字段的名称要与上面route里面保持一致
    // 自己的判断条件
    if (localStorage.getItem('token1') === null) {
      next({
        path: '/login', // 重定向后的路由
        query: {redirect: to.fullPath} // 登录成功之后可以根据query中的内容跳转回原来的路由(页面)
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
