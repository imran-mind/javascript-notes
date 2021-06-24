
const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = map[i] + 1 || 1;
    });
    console.log(map);
    return map;
}

const findDuplicate = (arr) =>{
    const map = mapString(arr);
    for(const c in map){
        if(map[c] > 1){
            console.log(c)
            return c;
        }
    }
}


const removeDuplicates = (arr)=>{
    const map = {};
    const outArr =[];
    for(let i=0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = true;
            outArr.push(arr[i]);
        }
    }
    console.log(outArr);
}


// findDuplicate([1,2,2,3,3])
// removeDuplicates([1,2,2,3,3])

const obj = [
    {id:1,name:'a'},
    {id:1,name:'d'},
    {id:2,name:'b'},
    {id:3,name:'c'}
]
const res = [];
const map = new Map();
const removeDeupsId = (arr) =>{
    for(const item of obj){
        if(!map.has(item.id)){
            map.set(item.id,true);
            res.push(item);
        }
    }
    console.log(res);
}

removeDeupsId(obj)