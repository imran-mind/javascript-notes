
/* 
Find the missing numnber
Input:  [1,2,3,4,5,6,8,9,10]
Output: 7
Explanation: The missing number from 1 to 10 is 7
*/

const findMissing = (arr,n) =>{
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for(let i = 0; i < n; i++){
        total = total - arr[i];
    }
    console.log(total)
}
const arr = [1,2,3,5];
const n = arr.length;
findMissing(arr,n);


