// 全局的
export const state = {
  //当前头部菜单的menu的索引
  active: -1,
  //侧栏工具的索引
  toolActive:-1,
  //侧栏展示隐藏工具的索引
  showToolIndex:-1,
  //侧栏工具的action名字
  toolAction:'',
  // 选择图片的input
  imgUpLoad:"",
  //画布的上下文
  ctx:{},
  //图层栈
  layer:[]

}

export const mutations = {
  SETNEWACTIVE(state, newIndex) {
    state.active = newIndex;
  },
  SETNEWTOOLACTIVE(state,newindex){
    state.toolActive = newindex;
  },
  SETSHOWTOOLINDEX(state,newindex){
    state.showToolIndex = newindex;
  },
  SETIMGUPLOAD(state,dom){
    state.imgUpLoad = dom;
  },
  // 在ctx对象中加入每个图层的上下文
  SETCTX(state,{key,ctx}){
    state.ctx[key] = ctx;
  },
  SETTOOLACTION(state,name){
    state.toolAction = name;
  },
  // 用栈的方式增加图层
  ADDLAYER(state,canvasdom){
    state.layer.push(canvasdom);
  }
}

export const actions = {

}

