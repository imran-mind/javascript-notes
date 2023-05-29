
const groupBy = (values, keyFinder)=>{
   //using reduce to aggregate value
   return values.reduce((a,b)=>{
    //depending upon the type of keyFind[string or func]
    //if it's a fucn pass the value to it
    //if it's a property, access the property
    const key = typeof keyFinder === 'function' ? keyFinder(b) : b[keyFinder];
    if(!a[key]){
        a[key] = [b];
    }else{
        a[key] = [...a[key], b];
    }
    return a;
   },{})
}

// my approach
const _groupBy = (arr, finder)=>{
    const obj = {};
    arr.forEach((item)=>{
        const key = typeof finder === 'function' ? finder(item) : item[finder];
        if(obj[key]){
            obj[key].push(item);
        } else{
            obj[key] = [item];
        }
    })
    return obj;
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); 
console.log(groupBy(['one', 'two', 'three'], 'length'));

console.log(_groupBy([6.1, 4.2, 6.3], Math.floor)); 
console.log(_groupBy(['one', 'two', 'three'], 'length'));
// Output:
// { 6: [6.1, 6.3], 4: [4.2] }
// { 3: ['one', 'two'], 5: ['three'] }