// 深拷贝，如果目标和源有相同的元素，则目标被覆盖掉。
export default function(target,resource){
    // 目标和源必须是数组或者对象。
    if(typeof(resource) != 'object' && typeof(resource) != 'object') return

    for(let key in resource){
        // 当元素为数组的时候
        if(typeof(resource[key]) === 'object' && resource[key].length){
            target[key] = []
           for(let j = 0;j < resource[key].length;j++){
                if(typeof resource[key][j] !== 'object'){
                    target[key][j] = resource[key][j]
                }else{
                    deepCopy(target[key][j],resource[key][j]);
                }
           }
        //当元素为对象的时候
        }
        else if(typeof(resource[key]) === 'object'){
            deepCopy(target[key],resource[key]);
        }
        // 既不是对象也不是数组
        else{
            target[key] = resource[key]
        }
    }
}