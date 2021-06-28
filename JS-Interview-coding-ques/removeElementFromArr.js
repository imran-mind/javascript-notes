
const removeGivenElementFromArr = (arr, item) =>{
    const index = arr.indexOf(item);
    arr.splice(index,1);
    console.log(arr);
}

removeGivenElementFromArr([2,3,4,5,6],5);