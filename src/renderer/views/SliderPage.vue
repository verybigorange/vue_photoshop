<template>
	<div class="slider">
		<ul>
			<li v-for="(item,index) in tools" :key="item.showTool.text" class="iconfont" :class="item.showTool.iconClass" :title="item.showTool.text"></li>
		</ul>
	</div>
</template>

<script>
import tools from "./data/tools"

export default {
	data() {
		return {
			tools: tools
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
