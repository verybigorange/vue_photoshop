<template>
    <div class="handle-image" ref="container" @mousedown.stop="startDraw"  @mouseup="endDraw">
       <input type="file"  id="imgUpLoad" ref="imgUpLoad">
    </div>
</template>

<script>

export default {
    mounted(){
        // 将上传图片的input放在store里
        this.$store.commit('SETIMGUPLOAD',this.$refs.imgUpLoad)
    },
    methods:{
        //开始绘画
        startDraw(){
            //如果当前工具是激活状态，启动工具
           if(this.$store.state.toolAction){
               this.$store.dispatch(this.$store.state.toolAction);
           }
           
        },
        //结束绘画
        endDraw(){
            
        }
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
    cursor: default;
    
}
#imgUpLoad{
    display: none;
}
</style>




