
const hasDuplicate = (n) =>{
    for(let i=0; i<n.length; i++){
        for(let j=0; i<n.length; j++){
            if(i === j) continue;

            if(n[i] === n[j]){
                return true;
            }
        }
    }
    return false;
}

const arr = [1,2,2,3];
console.log(hasDuplicate(arr));