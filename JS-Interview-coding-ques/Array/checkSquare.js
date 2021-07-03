

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
console.log(checkSquare(a1,a2))