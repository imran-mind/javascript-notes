
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    return map;
}

const firstRepeatedChar = str =>{
    const map = mapString(str);
    for(const i of str){
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

const firstNonRepeatedElement = arr =>{
    const map = mapString(arr);
    for(const i of arr){
        if(map[i] == 1){
            return i;
        }
    }
}

// console.log(firstRepeatedChar('adbcbdba'));
console.log(firstRepeatedChar([10, 5, 3, 4, 3, 5, 6]));
console.log(firstNonRepeatedChar([10, 5, 3, 4, 3, 5, 6]));
// console.log(firstNonRepeatedChar('adbcbdba'));