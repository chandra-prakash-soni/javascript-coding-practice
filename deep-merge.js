const obj1 = {a:1, b:{x:10}};
const obj2 = {b:{y:20},c:3}

function deepMerge(target,source){
    for(let key in source){
        if(typeof source[key]==="object" && source[key]!==null){
            if(!target[key]){
                target[key] = {};
            }else{
                deepMerge(target[key],source[key])
            }
        }else{
            target[key] = source[key]
        }
    }
    return target;
}

console.log(deepMerge(obj1,obj2))