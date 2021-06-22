
const findMinMax = (arr)=>{
    let min = arr[0];
    let max = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min =  arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log('Min -> ',min)
    console.log('Max -> ',max)
}

findMinMax([19,2,3,4,5,56,9])