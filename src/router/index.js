import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: (resolve) => {
        require(['@/components/index'], resolve)
      }
    },
    {
      path: '/child',
      name: 'child',
      component: (resolve) => {
        require(['@/components/child'], resolve)
      }
    }
  ]
})

// 根据具体的跳转类型更改跳转属性值，执行不同的动画
const nextDirection = (direction) => {
  let el = document.getElementById('app')
  if (el) el.setAttribute('transition-direction', direction)
}

router['_push'] = router['push']

// 重写路由跳转方法，设置跳转类型后跳转
router.forward = router['push'] = (target) => {
  nextDirection('forward')
  setTimeout(() => { router['_push'](target) })
}

// 重写路由返回方法，设置跳转类型后跳转到上一页
router.back = (target) => {
  nextDirection('back')
  if (target) {
    setTimeout(() => { router['_push'](target) })
  }
  history.go(-1)
}

export default router
