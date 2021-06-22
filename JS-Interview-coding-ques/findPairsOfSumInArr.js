const mapString = (s)=>{
    const map = {};
    s.forEach(i => {
        map[i] = i
    });
    console.log(map);
    return map;
}

const getPairsCount = (arr,sum)=>{
    let count = 0;
    let pair = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === sum){
                count++;
                const sumPair = [arr[i],arr[j] ]
                pair.push(sumPair)
            }
        }
    }
    console.log('count ',count);
    console.log('pair ',pair);
}


const _getPairsCount = (arr,sum)=>{
    const map = {};
    let result =[];
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]){
            result.push([map[arr[i]],arr[i]]);
        }else{
            map[sum-arr[i]] = arr[i];
        }
    }
    console.log('result => ',result);
}

// getPairsCount([1,2,3,4,5,6],6)
_getPairsCount([1,2,3,4,5,6],6)