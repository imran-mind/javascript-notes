
const mapString = (s)=>{
    const map = {};
    s.split('').forEach(i => {
        map[i] = map[i] + 1 || 1;
    });

    console.log(map);
    return map;
}

const firstRepeatedChar = str =>{
    const map = mapString(str);
    for(const i in map){
        if(map[i] > 1){
            return i;
        }
    }
}
const firstNonRepeatedChar = str =>{
    const map = mapString(str);
    for(const i in map){
        if(map[i] == 1){
            return i;
        }
    }
}

console.log(firstRepeatedChar('adbcbdba'));
console.log(firstNonRepeatedChar('adbcbdba'));