

const findMissing = (arr)=>{
    const n = arr.length;
    let total = (n+1)*(n+2)/2;
    for(let i=0; i<n; i++){
        total = total - arr[i];
    }
    console.log('missing ',total);
}

findMissing([1,2,3,4,6])