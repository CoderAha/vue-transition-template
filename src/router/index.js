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

const nextDirection = (direction) => {
  let el = document.getElementById('app')
  if (el) el.setAttribute('transition-direction', direction)
}

router['_push'] = router['push']

router.forward = router['push'] = (target) => {
  console.log('forward')
  nextDirection('forward')
  setTimeout(() => { router['_push'](target) })
}

router.back = (target) => {
  nextDirection('back')
  if (target) {
    setTimeout(() => { router['_push'](target) })
  }
  history.go(-1)
}

export default router
