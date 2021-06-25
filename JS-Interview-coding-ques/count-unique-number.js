
const uniqueCount = (arr)=>{
    const uniqueArr=[];
    const map = {};
    for(let i=0;i<arr.length;i++){
        // if(!uniqueArr.includes(arr[i])){
        //     uniqueArr.push(arr[i])
        // }
        if(!map[arr[i]]){
            map[arr[i]] = arr[i];
        }
    }
    console.log(Object.keys(map).length);
}

const ar = [1,1,2,2,3,4,4,5,6,7,8,8];
uniqueCount(ar);