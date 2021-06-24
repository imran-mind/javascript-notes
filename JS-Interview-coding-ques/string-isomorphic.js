

const isIsomorphic = (s1, s2)=>{
    if(s1.length !== s2.length) return false;
    const map = {};
    for(let i=0; i<s2.length; i++){
        const letterA = s1[i];
        const letterB = s2[i];
        if(map[letterA] == undefined){
            map[letterA] = letterB;
        }else if(map[letterA] !== letterB){
            console.log(map[letterA] , letterB)
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic('kick','side'));
console.log(isIsomorphic('egg','add'));
console.log(isIsomorphic('paper','title'));