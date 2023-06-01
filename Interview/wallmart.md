// const sort = (arr)=>{
//     const evenArr = [];
//     const oddArr = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenArr.push(arr[i])
//         }else{
//             oddArr.push(arr[i]);
//         }
//     }
//     //o(n)
//     //o(n)
//     return [...evenArr, ...oddArr];
// }

// const arr = [1,2,3,4,5,6];

// console.log(sort(arr));

const s1 = "abcd";//abcdmrrmbcba
const s2 = "mrrm";

const a = "12"; // 12#21
const b = "#"

const s = "srls";
const p = "r";
const isPalindrom = (str)=>{
    if(str){
        const reversStr = str.split('').reverse().join('');//
        return reversStr === str;
    }
    return false;
}

const checkPalindromWithTwoStr = (s1, s2) =>{
    if(isPalindrom(s1)){
        return s1;
    }
    if(isPalindrom(s1) && isPalindrom(s2)){
        if(s1.length % 2 ==0){ //even len
            const breakStr = s1.slice(0, s1.length/2);
            return breakStr + s2 + breakStr;
        }else{ //odd len
            return s1+s2+s1;
        }
    }
    if(!isPalindrom(s1)){
        for(let i=0; i<s1.length; i++){
            for(let j=0; j<s2; j++){
                
            }
        }
    }
}



// func which gives palindrom or not
// if both are palindrom 
    // if s1 len is even then we can break in to 2 and append in between
    // else odd ans = s1+s2+s1;
// ab mrrm ba

//
