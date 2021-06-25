

const mergeSortedArray = (a1, a2)=>{
    const merge = [...a1,...a2].sort((a,b)=>a-b);
    console.log(merge);
}

mergeSortedArray([2,5,6,9], [1,2,3,29]);