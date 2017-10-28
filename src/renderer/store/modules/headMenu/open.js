let cx, canvas, imgSource, box
// 用fileReader读取本地的图片信息,加到页面上
function open(store) {
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
    drawImage()
}

//根据容器设置canvas画布的宽高，并把图像加入canvas中
function drawImage() {
    try {
        canvas.width = box.offsetWidth;
        canvas.height = box.offsetHeight;
        cx.clearRect(0, 0, canvas.width, canvas.height);
        cx.drawImage(imgSource, canvas.width / 2 - imgSource.width / 2, canvas.height / 2 - imgSource.height / 2);
    } catch (err) {

    }
}

//窗口大小发生变化时候，重置canvas元素
document.body.onresize = function () {
    drawImage()
}

export default open;