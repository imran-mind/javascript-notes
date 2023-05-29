
const groupBy = (collection, iterator)=>{
    const obj = {};
    if(iterator === 'length' && collection.length){
        collection.forEach((item)=>{
            const n = item.length;
            if(obj[n]){
                obj[n].push(item);
            }else{
                obj[n] = [item];
            }
        })
    }
    return obj;
}
console.log(groupBy(['one', 'two', 'three'], 'length'));
