
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
console.log(removeDups('ssimran'))
console.log(_removeDups('ssiimran'))