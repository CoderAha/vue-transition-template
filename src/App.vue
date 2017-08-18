<template>
  <div id="app">
    <transition name="page">
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      deviceClass: ''
    }
  },
  created () {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      this.deviceClass = 'ios-device'
    } else {
      this.deviceClass = 'android-device'
    }

    document.querySelector('body').className = this.deviceClass
  }
}
</script>

<style>

</style>
