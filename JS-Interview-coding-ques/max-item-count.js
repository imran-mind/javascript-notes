

const maxItemCount = (arr)=>{
    const sortedArr = arr.sort((a,b)=>b-a);
    const max = sortedArr[0];
    let result = 0;
    for(let i=0; i<arr.length; i++){
        if(max === arr[i]){
            result++;
        }
    }
    console.log('max=>',max,'result =>',result);
}
 

maxItemCount([2,56,34,12,3,4,56,7,56])


const flatten = (arr)=>{
    return [].concat(...arr.map(child=>{
        return (Array.isArray(child) ? flatten(child): child);
    }));
}

console.log(flatten([1,2,[3,4,[5,6]]]))