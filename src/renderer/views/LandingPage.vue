<template>
  <div id="wrapper" @click="handleclick" @contextmenu="handlecontextmenu">
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
      
      //如果工具栏展开，收起工具栏
      if(this.$store.showToolIndex !== -1){
        this.$store.commit("SETSHOWTOOLINDEX",-1);
      }
    },
    handlecontextmenu(){
       //如果工具栏展开，收起工具栏
      if(this.$store.showToolIndex !== -1){
        this.$store.commit("SETSHOWTOOLINDEX",-1);
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
