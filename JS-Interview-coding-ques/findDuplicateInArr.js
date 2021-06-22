
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const findDuplicate = (arr) =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] > 1){
            console.log(c)
            return c;
        }
    }
}

findDuplicate([1,2,2,3,3])