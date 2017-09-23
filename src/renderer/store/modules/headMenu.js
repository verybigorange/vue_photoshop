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

  selectMenu() {
    const store = this;

    const input = this.state.imgUpLoad;
    if (!input.onchange) {
      input.onchange = function () {
        handleChange.call(this, store)
      }
    }

    input.click();
  },
}


// 用fileReader读取本地的图片信息,加到页面上
function handleChange(store) {
  const file = this.files[0];
  if (window.FileReader) {
    const fr = new FileReader();
    fr.onloadend = function (e) {
      if(!store.state.headMenu.hasImgDom){
        store.commit("headMenu/SETHASIMGDOM",true);
        let img = document.createElement("img");
        img.src = e.target.result;
        img.id = "image";
        img.className = "image";
        this.parentNode.appendChild(img);
      }else{
        document.getElementById("image").src = e.target.result;
      }
    }.bind(this);
    // 转成base64
    fr.readAsDataURL(file);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}