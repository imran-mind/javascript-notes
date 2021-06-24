

// return [...new Set(s.split(''))].join('');
const notCommonInArr = (arr1,arr2)=>{
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'please pass array';
    }
    const ans = arr1.filter(c=>{
        return arr2.indexOf(c) === -1;
    });

    const ans2 =arr2.filter(c=>{
        return arr1.indexOf(c) === -1;
    });
    console.log([...ans,...ans2]);
}

const a1 = [1,2,3,4,5];
const a2 = [2,3,6,7,8,5];

notCommonInArr(a1, a2);