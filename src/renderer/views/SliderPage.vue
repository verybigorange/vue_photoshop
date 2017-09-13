<template>
	<div class="slider base_bgcolor">
		<ul class="tools">
			<li @click="activeIndex = index" 
				v-for="(item,index) in tools" 
				:key="item.showTool.text" 
				class="iconfont tool" 
				:class = "[item.showTool.iconClass]" 
				:title="item.showTool.text">
			</li>
		</ul>
	</div>
</template>

<script>
import tools from "./data/tools"

export default {
	data() {
		return {
			tools: tools,
			activeIndex:-1,

		}
	}
}
</script>

<style lang="scss" scoped>
.slider{
	width: 40px;
	text-align: center;
	box-sizing: border-box;
	padding: 20px 0;
	height: 100%;
}

.tools{
	color: #fff;
	.tool{
		height: 20px;
		line-height: 0px;
		box-sizing: border-box;
		margin:5px 5px;
		padding:10px 5px;
	}
	.tool:hover{
		background: #686666;
		border-radius:5px; 
	}
}
.active{
	background: #000;
	border-radius:5px; 
}
</style>
