

const binarySearch = (array, x, start, end) =>{
    if(start>end) return false;
    const mid = Math.floor((start+end/2));
    if(array[mid] === x)
        return true;
    else if(array[mid] > x)
        return binarySearch(array,x, start, mid-1);
    else if(array[mid] < x)
        return binarySearch(array,x, mid+1, end);
    else
        return false;
}


const _binarySearch = (array,x)=>{
    let start = 0, end=arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(array[mid] === x)
            return true;
        else if(array[mid] > x)
            end = mid - 1;
        else if(array[mid] < x)
            start = mid + 1;
    }
    return false;
}
const arr = [1,2,3,4,5,6,7];
console.log(_binarySearch(arr ,1))