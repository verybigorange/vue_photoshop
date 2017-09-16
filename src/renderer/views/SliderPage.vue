<template>
	<div class="slider base_bgcolor">
		<ul class="tools">
			<li @click.stop="toolClick(index)" @contextmenu.stop.prevent="handlecontextmenu(index)" v-for="(item,index) in tools" :key="item.showTool.text" class="iconfont tool" :class="[item.showTool.iconClass,{'tool-active':index==toolActie}]" :title="item.showTool.text">
				<ul class="sub-tools base_bgcolor" :class="showToolIndex === index?'sub-tools-show':''">
					<li class="sub-tool" v-for="(subItem,i) in item.children" :key="subItem.text" :class="subItem.iconClass" @click.stop="selsetSubTool">
						<span style="margin:0 10px;">{{subItem.text}}</span>
						<span class="pull-right">{{item.shortcutKey}}</span>
					</li>
				</ul>
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
		}
	},
	computed: {
		toolActie() {
			return this.$store.state.toolActive
		},
		showToolIndex() {
			return this.$store.state.showToolIndex
		}
	},
	methods: {
		//点击工具
		toolClick(index) {
			this.$store.commit('SETNEWTOOLACTIVE', index);
			this.$store.commit('SETSHOWTOOLINDEX', -1);
		},
		//点击右键暂开工具栏
		handlecontextmenu(index) {
			this.$store.commit('SETSHOWTOOLINDEX', index);
			this.$store.commit('SETNEWTOOLACTIVE', index);
		},
		//从工具栏中选择工具
		selsetSubTool() {
			this.$store.commit('SETSHOWTOOLINDEX', -1);
		}
	}
}
</script>

<style lang="scss" scoped>
.slider {
	width: 40px;
	text-align: center;
	box-sizing: border-box;
	padding: 20px 0;
	height: 100%;
}

.tools {
	color: #fff;
	.tool {
		position: relative;
		height: 22px;
		line-height: 0px;
		box-sizing: border-box;
		margin: 5px 5px;
		padding: 10px 5px;
		background: url("../assets/img/show.png") no-repeat 26px 16px;
		.sub-tools {
			display: none;
			position: absolute;
			left: 36px;
			top: 0px;
			padding: 5px 0;
			.sub-tool {
				width: 182px;
				color: #fff;
				font-size: 12px;
				height: 22px;
				line-height: 22px;
				text-align: left;
				padding: 0 10px;
				box-sizing: border-box;
				cursor: default;
				&:hover {
					background: #7fa9d2;
				}
			}
		}
		.sub-tools-show {
			display: block !important;
		}
	}
	.tool:hover {
		background-color: #686666;
		border-radius: 5px;
	}
	.tool-active {
		background-color: #3e3e3e !important;
		border-radius: 5px;
	}
}
</style>
