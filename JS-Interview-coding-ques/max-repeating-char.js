
/* 
 input-> hello
 output-> l -> 3 

 Date 21 June 2021
*/

const getMaxCharFromString = (s)=>{
    const map = {};
    for(const element of s){
        map[element] = map[element] + 1 || 1;
    }
    
    let maxCount = 0;
    let maxChar = null;

    for(const ch in map){
        console.log(ch)
        if(map[ch] > maxCount){
            maxCount = map[ch];
            maxChar = ch;
        }
    }
    return {[maxChar]: maxCount};
}

console.log(getMaxCharFromString("hello"));