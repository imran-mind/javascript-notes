
const mapString = (s)=>{
    const map = {};
    s.split('').forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const removeDups = (s) =>{
    return s.split('').filter((item,index,arr)=>{
        return arr.indexOf(item) === index;
    }).join('')
}

const _removeDups = (s)=>{
    return [...new Set(s.split(''))].join('');
}

const removeDupsByMap = arr=>{
    const map = {};
    for(const c of arr){
        map[c] = true
    }
    console.log(Object.keys(map).map(i=>parseInt(i)));
}
removeDupsByMap([1,3,4,5,3,2,1,5,6,7,7])
console.log(removeDups('ssimran'))
console.log(_removeDups('ssiimran'))