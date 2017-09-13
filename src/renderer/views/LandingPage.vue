<template>
  <div id="wrapper">
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
