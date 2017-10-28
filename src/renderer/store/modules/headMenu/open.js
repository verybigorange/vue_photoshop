let cx, canvas, imgSource, box, st
// 用fileReader读取本地的图片信息,加到页面上
function open(store) {
    st = store;
    const file = this.files[0];
    if (window.FileReader) {
        const fr = new FileReader();
        fr.onloadend = function (e) {
            if (!store.state.headMenu.hasImgDom) {
                store.commit("headMenu/SETHASIMGDOM", true);
                let img = document.createElement("img");
                let container = document.createElement("div");
                img.src = e.target.result;
                img.id = "image";
                img.style.display = "block";
                img.className = "image";
                container.id = "container";
                container.appendChild(img);
                this.parentNode.appendChild(container);
                img.onload = function () {
                    imgSource = this
                    initCanvas.call(store,container)
                }

            } else {
                document.getElementById("image").src = e.target.result;
            }
        }.bind(this);
        // 转成base64
        fr.readAsDataURL(file);
    }
}

//初始化canvas
function initCanvas(container) {
    canvas = document.createElement('canvas');
    // 用id给图层命名
    canvas.id = 'pic_layer';
    box = document.querySelector(".handle-image");
    cx = canvas.getContext('2d');
    //将canvas上下文挂在vuex上。
    this.commit("SETCTX",{key:"pic_layer",ctx:cx});
    container.removeChild(imgSource);
    container.appendChild(canvas);
    this.commit("ADDLAYER",canvas);
    draw.call(this)
}

//根据容器设置canvas画布的宽高，并把图像加入canvas中
function draw() {
    const layer = this.state.layer;
    for(let item of layer){
        try {
            item.width = box.offsetWidth;
            item.height = box.offsetHeight;
            //为第一个图片图层的时候清空重置。
            if(item.id === 'pic_layer'){
                cx.clearRect(0, 0, item.width, item.height);
                cx.drawImage(imgSource, item.width / 2 - imgSource.width / 2, item.height / 2 - imgSource.height / 2);
            }
           
        } catch (err) {
    
        }
    }
   
}

//窗口大小发生变化时候，重置所有的canvas画布大小
document.body.onresize = function () {
    draw.call(st)
}

export default open;