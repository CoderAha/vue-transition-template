<template>
  <div>
    <button @click="$router.back()">返回上一页</button>
  </div>
</template>

<script>
  export default {
    name: 'child'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .1rem;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    background-color: #26a2ff;
    display: block;
    font-size: .3rem;
    height: .8rem;
    outline: 0;
    overflow: hidden;
    text-align: center;
    margin: 1rem auto;
  }

  button::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: 0;
  }

  button:active::after {
    opacity: .4
  }
</style>
