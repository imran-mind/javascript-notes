

const intersection = (arr1,arr2)=>{
    return arr1.filter(item=>{
        console.log(item, arr2.indexOf(item))
        return arr2.indexOf(item) !== -1;
    })
}

arr2.indexOf(item)
const a1 = [[1,2],[3,4]];
const a2 = [[1,2]];
console.log(intersection(a1,a2))