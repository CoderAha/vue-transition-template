    


官方文档：https://cn.vuejs.org/v2/guide/transitions.html

演示地址：[http://www.coderlife.com](http://www.coderlife.com:4000) (请在移动端查看，PC端查看请打开移动端调试模式)

## 前言

看了挺多Vue的UI框架都不带过渡动画，今天心血来潮，就把自己平时用的动效抽离出来。可直接通过脚手架init模版配合其他UI框架使用，不需要另外进行配置。

## 原理
模版中使用了Vue提供的封装组件 **transition**，配合CSS类名在 *enter/leave* 的六种不同的状态过渡中切换。
![过渡状态图示](https://cn.vuejs.org/images/transition.png)

对于这些在 *enter/leave* 过渡中切换的类名，`v-` 是这些类名的前缀。使用 `<transition name="my-transition">` 可以重置前缀，比如 `v-enter` 替换为 `my-transition-enter`。


## 重写跳转函数

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
    
## How to use

``` bash
# init template
vue init CoderLQChou/vue-transition-template my-transition-app

# cd project
cd my-transition-app

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

仓库地址：https://github.com/CoderLQChou/vue-transition-template 欢迎star
