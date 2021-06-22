
/* 
left hand rotation of arrya
arr=[1,2,3,4,5,6] 
n=2
output= [6,5,1,2,3,4];
*/
const rotationArray = (arr,n)=>{
    for(let i=0; i<n; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}

/* 
right hand rotation of arrya
arr=[1,2,3,4,5,6] 
n=2
output= [6,5,1,2,3,4];
*/
const _rotationArray = (arr,n)=>{
    for(let i=0; i<n; i++){
        arr.push(arr.shift());
    }
    return arr;
}

console.log(rotationArray([1,2,3,4,5,6],2))
console.log(_rotationArray([1,2,3,4,5,6],2))