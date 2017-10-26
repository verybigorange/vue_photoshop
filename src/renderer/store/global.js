// 全局的
export const state = {
  //当前头部菜单的menu的索引
  active: -1,
  //侧栏工具的索引
  toolActive:-1,
  //侧栏展示隐藏工具的索引
  showToolIndex:-1,
  // 选择图片的input
  imgUpLoad:"",
  //画布的上下文
  ctx:"",

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
  SETCTX(state,val){
    state.ctx = val;
  }
}

export const actions = {

}

