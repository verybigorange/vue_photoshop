//将utils目录下的工具方法全部挂在utils这个对象上
let files = require.context(".",false,/\.js$/);

let utils = {};

files.keys().forEach( key =>{
    if(key === "index") return 
    utils[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default utils