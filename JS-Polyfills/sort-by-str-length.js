

const mySort = function(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i].length < arr[j].length){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arr = ["GeeksforGeeks", "I", "from", "am"];
const sortedArr = mySort(arr);
console.log(sortedArr);
