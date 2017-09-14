<template>
    <div class="menuItem"  @click.stop="$emit('clicked')">
        <a href="javascript:;" >{{menu.title}}</a>
        <ul class="subMenu"  >
            <li class="subMenuItem" @click.stop="selected" :key="item.title" v-for="(item,index) in menu.subList">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['menu','tag'],
    data(){
       return {

       }
    },
    methods:{
      selected(){

        // 收起下拉  
        this.$store.commit("SETNEWACTIVE",-1);
      }
    }
}
</script>

<style lang="scss" scoped>
.menuItem{
    display: inline-block;
    position: relative;
    margin: 0 5px;
    
}
.menuItem>a{
    :hover{
		background: #686666;
		border-radius:5px; 
    }
}

.subMenu{
    display: none;
    position: absolute;
    left: 0;
    top:30px;
    padding: 5px 0;
    width: 100px;
    background: #fff;
    font-size: 12px;
    overflow: hidden;
}
.active .subMenu{
    display: block;
}

.subMenuItem{
        padding: 0 10px;
        height: 20px;
        line-height: 20px;
        cursor: default;
        &:hover{
            background:#1fb0fd;
            color: #fff;
        }
    }
</style>

