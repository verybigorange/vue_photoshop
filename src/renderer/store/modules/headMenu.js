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
        let container = document.createElement("div");
        img.src = e.target.result;
        img.id = "image";
        img.style.display = "block";
        img.className = "image";
        container.id = "container";
        container.appendChild(img);
        this.parentNode.appendChild(container);
        /** three */
        
        /** three */

      }else{
        document.getElementById("image").src = e.target.result;
      }
    }.bind(this);
    // 转成base64
    fr.readAsDataURL(file);
  }
}
 /** three */
let renderer,width,height
function initThee(){
  let container = document.getElementById('container');
  width = container.clientWidth;
  height = container.clientHeight;
  renderer = new HTMLHRElement.WebGLRenderer({
    antialias:true
  });
  renderer.setSize(width,height);
  container.removeChild(document.getElementById("image"));
  container.appendChild(renderer.domElement);
  renderer.setClearColor(0xFFFFFF,1.0);
}
let camera;
function initCamera(){
  camera = new THREE.PerspectiveCamera(45,width/height,1,1000)
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 0;
  camera.lookAt({
    x:0,Y:0,Z:0
  })
}
let scene;
function initScene() {
  scene = new THREE.Scene();
}

let light;
function initLight() {
  light = new THREE.AmbientLight("#fff");
  scene.add(light);
}

let object;
function initObject(){
  // let geomery = new THREE.Plane
}

/** three */



export default {
  namespaced: true,
  state,
  mutations,
  actions
}