function doFlat(){
    let flatten = [];
    function flat(arr){    
        for(let i=0; i<arr.length; i++){
            const item = arr[i];
            if(Array.isArray(item)){
                // Object.assign(flatten,flat(item));
               [...flatten,flat(item)]
            }else{
                flatten.push(item);
            }
        }
        return flatten;
    }
    return {
        flat
    }
}

const {flat} = doFlat();

console.log(flat([1,2,[3,[0,4,5],4,[5,6]]]))