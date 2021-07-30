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
                result.push([map[arr[i]], arr[i]]);
            }else{
                map[sum-arr[i]] = arr[i];
            }
        }
        console.log('result => ',result);
    }

    getPairsCount([1,2,3,4,5,6,-4],6)
    _getPairsCount([1,2,3,4,5,-5,6],6)


/* 
    checking sum zero
    i/p => [-5,-4,-3,-2,0,2,4,6,8];
    o/p=> [?,?];
*/


const findSumZero = (arr)=>{
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == 0){
                return [arr[i],arr[j]];
            }
        }
    }
    return [];
}

const findSumZeroTwoPointerApproach = (arr,sum)=>{
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        const total = arr[left] + arr[right];
        console.log(total)
        if(total === sum){
            return [arr[left] , arr[right]]
        }else if(total > sum){
            right--;
        }else{
            left++;
        }
    } 
    return [];
}


var arr1 = [-1,0,1,2,3,5,5,6,7,10,11];


var findPairTwoPointerApproach = (arr,sum=10) =>{
    let left = 0;
    let right = arr.length-1;
    const pair = [];
    while(left < right){
        const total = arr[left] + arr[right];
        if(total === sum){
            pair.push([arr[left] ,arr[right]]);
            left++;
            right++;
        }else if(total > sum){
            right --;
        }else{
            left ++;
        }
    }
    console.log(pair)
}
const findZeroByMap = (arr, sum) =>{
    const map = {};
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]){
            return [map[arr[i]],arr[i]];
        }else{
            map[sum-arr[i]] = arr[i];
        }
    }
}
// console.log(findSumZero([-5,-4,-3,-2,0,2,4,6,8]))
// console.log(findSumZeroTwoPointerApproach([-5,-4,-3,-2,0,2,4,6,8], 6))
console.log(findZeroByMap([4,6,8,-5,-4,-3,-2,0,2], 0))

