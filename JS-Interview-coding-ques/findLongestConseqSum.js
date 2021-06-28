

const findLongestConseqSum = (arr,num) =>{
    let max = 0;
    for(let i=0; i<arr.length; i++){
        let tmp =0;
        for(let j=0; j<num; j++){
            if(i+j < arr.length){
                tmp = tmp + arr[i+j];
            }
        }
        max = Math.max(max, tmp);
    }
    console.log('sum of longest consecutive ',max)
}
// 
findLongestConseqSum([1,2,3,4,3,5,4,6,7,8],4)
