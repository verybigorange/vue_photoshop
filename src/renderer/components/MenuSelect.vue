<template>
    <div class="menuItem" @click="show = !show">
        <a href="javascript:;">{{menu.title}}</a>
        <ul class="subMenu" v-if="show">
            <li class="subMenuItem" :key="item.title" v-for="(item,index) in menu.subList">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['menu'],
    data(){
        return {
            show:false,
        }
    },
    methods:{
       
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
    position: absolute;
    left: 0;
    top:30px;
    padding: 5px 0;
    width: 100px;
    background: #fff;
    font-size: 12px;
    overflow: hidden;
}
.subMenuItem{
        padding: 0 10px;
        height: 20px;
        line-height: 20px;
    }
</style>

