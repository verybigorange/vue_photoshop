// 全局的
export const state = {
  //当前头部菜单的menu的索引
  active: -1,
  //侧栏工具的索引
  toolActive:-1,
  //侧栏展示隐藏工具的索引
  showToolIndex:-1
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
}

export const actions = {

}

