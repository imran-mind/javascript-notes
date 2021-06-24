
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

/*  [1,2,3,4,5,6]
    20%6-> 2
    [3,4,5,6,1,2]
*/
const leftRotation = (arr,raotaiton)=>{
    const n = raotaiton % arr.length;
    const ans = arr.slice(n).concat(arr.slice(0,n));
    console.log(ans);
}
const rightRotation = (arr,raotaiton)=>{
    const n = arr.length-raotaiton;
    const ans = arr.slice(n).concat(arr.slice(0,n));
    console.log(ans);
}
// console.log(rotationArray([1,2,3,4,5,6],2))
// console.log(_rotationArray([1,2,3,4,5,6],2))
console.log(leftRotation([1,2,3,4,5,6],20))
console.log(rightRotation([1,2,3,4,5,6],2))