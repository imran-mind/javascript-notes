

const intersection = (arr1,arr2)=>{
    return arr1.filter(item=>{
        console.log(item, arr2.indexOf(item))
        return arr2.indexOf(item) !== -1;
    })
}

const a1 = [[1,2],[3,4]];
const a2 = [[1,2]];

const _intersection = (arr1,arr2)=>{
    const map = {};
    const commonElements = [];
    arr1.forEach(item=>{
        map[item] = 1;
    });

    arr2.forEach(item=>{
        if(map[item] == 1){
            commonElements.push(item);
        }
    })
    console.log(commonElements);
}
// console.log(intersection(a1,a2))
_intersection([1,2,3],[2,4,1]);