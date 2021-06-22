

const chunk = (arr, chunkCount=1) =>{
    const chunks = [];
    let count = chunkCount;
    for(let i=0; i<arr.length; i = i + chunkCount){
        const a = arr.slice(i,count);
        chunks.push(a);
        count = count + chunkCount;
    }
    return chunks;
}

const reverse = (arr)=>{
    const newArr = [];
    const len = arr.length;
    for(let i=0; i<len; i++){
        newArr.push(arr.pop());
    }
    return newArr;
}

const _reverse = (arr)=>{
    for(let i=0; i<arr.length/2;i++){
        const temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]));
console.log(_reverse([1,2,3,4,5]));

console.log(chunk([1,2,3,4,5],4));