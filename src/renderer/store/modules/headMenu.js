import open from './headMenu/open'

const state = {
  //是否有图片节点
  hasImgDom: false
}

const mutations = {
  SETHASIMGDOM(state,val){
    state.hasImgDom = val
  }
}

const actions = {

  open() {
    const store = this;

    const input = this.state.imgUpLoad;
    if (!input.onchange) {
      input.onchange = function () {
        //将打开的图像转成canvas图像
        open.call(this, store)
      }
    }
    input.click();
  },
}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}