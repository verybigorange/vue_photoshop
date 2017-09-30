<template>
    <div class="handle-image" ref="container">
       <input type="file"  id="imgUpLoad" ref="imgUpLoad">
    </div>
</template>

<script>

export default {
    mounted(){
        // 将上传图片的input放在store里
        this.$store.commit('SETIMGUPLOAD',this.$refs.imgUpLoad)
    }
  
}
</script>

<style lang="scss" scoped>
.handle-image{
    overflow: hidden;
    color: #fff;
    flex-grow: 1;
    display: flex;
    justify-content:center;
    align-items:center;
    
}
#imgUpLoad{
    display: none;
}
</style>




