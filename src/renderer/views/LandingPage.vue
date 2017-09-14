<template>
  <div id="wrapper" @click="handleclick">
      <head-page></head-page>
      <div class="main">
         <slider-page></slider-page>
      </div>
     
  </div>
</template>

<script>
import HeadPage from "./HeadPage"
import SliderPage from "./SliderPage"

export default {
  components:{
    HeadPage,
    SliderPage
  },
  methods:{
    handleclick(){

      // 如果菜单下来展开，收起头部菜单的下拉
      if(this.$store.active !== -1){
        this.$store.commit("SETNEWACTIVE",-1);
      }
    }
  }
}
</script>

<style lang="scss">
#wrapper{ 
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  .main{
    flex: 1;
  }
}

</style>
