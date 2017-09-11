<template>
	<div class="slider">
		<ul>
			<li v-for="(item,index) in tools" :key="item.showTool.text" class="iconfoot" :class="item.showTool.iconClass" :title="item.showTool.text"></li>
		</ul>
		<a class="iconfoot icon-move"></a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tools: [
				{
					showTool: {
						text: "移动工具",
						iconClass: "icon-move"
					},
					shortcutKey: "V",
					children: [
						{
							text: "移动工具",
							iconClass: "icon-move"
						},
						{
							text: "画板工具",
							iconClass: "icon-huabangongjushouxinggongju"
						}
					]
				},
				{
					showTool: {
						text: "矩形选框工具",
						iconClass: ""
					},
					shortcutKey: "M",
					children: [
						{
							text: "矩形选框工具",
							iconClass: ""
						},
						{
							text: "椭圆选框工具",
							iconClass: ""
						},
						{
							text: "单行选框工具",
							iconClass: ""
						},
						{
							text: "单列选框工具",
							iconClass: ""
						}
					]
				},

			]
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
