<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vue_photoshop'
  }
</script>

<style lang="scss">
 body{
   background: #262626;
 }
 
// 滚动条样式
::-webkit-scrollbar{width:15px;height: 10px;}
::-webkit-scrollbar-track{background-color:#fff;}
::-webkit-scrollbar-thumb{background-color:#ccc;}
::-webkit-scrollbar-thumb:active {background-color:#00aff0}
 
</style>
