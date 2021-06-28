
const findLongestConseqSubseq = (arr) =>{
    let ans=0, count=0;
    arr.sort((a,b)=>a-b);
    
    const v = [];
    v.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            v.push(arr[i])
        }
    }

    for(let i = 0; i < v.length; i++){
        if(i>0 && v[i] === v[i-1]+1){
            count++;
        }else{
            count = 1;
        }

        ans = Math.max(count,ans);
    }
    console.log(ans);
};


// var a = [1, 9, 3, 10, 4, 20, 2,2,3];
var a = [1,2,2,3];
findLongestConseqSubseq(a);



function longestConsecutive(arr){
    arr.sort((a,b)=>a-b);
    const v = [];
    v.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]){
            v.push(arr[i]);
        }
    }
    let count=0, ans=0;
    // [1,2,3]
    for(let i=0; i<arr.length; i++){
        if(i > 0 && arr[i] === arr[i-1]+1){
            count++;
        }else{
            count = 1;
        }

        ans = Math.max(count,ans);
    }
    console.log('longest conscutive arr')
}








