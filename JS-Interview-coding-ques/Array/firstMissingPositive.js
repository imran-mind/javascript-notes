/* 
brute force approach
> remove duplicates
> filter out positive numbers and sort in asc order
> loop over an arr check

[1,2,0] => 3
[3,4,-1,1] => 2
[7,8,9,11,12] => 1 
*/

function findMissingPositive(nums){
    const unique = [...new Set(nums)];
    const arr = unique.filter((item)=>item > 0).sort((a,b)=>a-b);
    // console.log(arr)
    let j=1;
    for(let i=0; i<arr.length;i++){
        if(arr[i] === j){
            j++;
        }else{
            return j;
        }
    }
    return j;
}

function  _findMissingPositive(nums){
    const map = {};
    for(let i=0; i<nums.length; i++){
        map[nums[i]] = 1;
    }
    for(let i=1; i<=nums.length; i++){
        if(!map[i]){
            return i
        }
    }
    console.log(map)
}

// console.log(_findMissingPositive([2,2,2,-1,-4,0,1,3]));
// console.log(_findMissingPositive([1,2,0]));
// console.log(_findMissingPositive([3,4,-1,1]));
console.log(_findMissingPositive([7,8,9,11,12]));

// console.log(findMissingPositive([2,2,2,-1,-4,0,1,3]));
// console.log(findMissingPositive([1,2,0]));
// console.log(findMissingPositive([3,4,-1,1]));
// console.log(findMissingPositive([7,8,9,11,12]));


