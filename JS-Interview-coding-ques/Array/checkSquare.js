

/* 
 Time complexity O(n^2)
 Space Complexity O(1)
*/
const checkSquare = (a1, a2) =>{
    for(let i=0; i<a1.length;i++){
        let isSquare = false;
        for(let j=0; j<a2.length; j++){
            if(a1[i] * a1[i] === a2[j]){
                isSquare = true;
            }
            if(j === a2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}
const a1 = [1,2,3,4];
const a2 = [1,4,9,16];
/* 
 map = {
     1: 1,
     2: 4,
     3: 9,
     4: 16
 }
 a2.forEach(item=>{
     if(!map[item]){
         return false
     }
 })
 return true;
 Time complexity O(n)
 Space Complexity O(n)
*/

const checkSquareWithMap = (a1,a2) =>{
    if(a1.length !== a2.length)
        return false
    const map1 = {}, map2={};
    for(const item of a1){
        map1[item] = (map1[item] || 0) + 1;
    }
    for(const item of a2){
        map2[item] = (map2[item] || 0) + 1;
    }
    
    for(const key in map1){
        if(!map2[key * key])
            return false;

        if(map1[key] !== map2[key * key])
            return false;
    }
    console.log(map1)
    console.log(map2)
    return true;
    
}
console.log(checkSquareWithMap(a1,a2))