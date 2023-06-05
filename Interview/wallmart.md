---------------------------------------1st round DS & Algo -----------------------------------
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


---------------------------------------2nd round React & Node and Js -----------------------------------

// create image viewer app in react
// Preview done
// list of thumbnails done
/// user can select image from thumbnail done
https://github.com/imran-mind/walmart-react

1. What is synthetic event and whey React uses it.
2. what is the use of Key in React list
3. what is Event Delegation
4. what is event capturing and bubbling
5. what is memoization and how to use in React.
6. what is the diff b/w async and differ
7. how to improve page loading in react
8. what is cache
9. How to know server side cache is added or not
10. what is prefetch and reconnect in network call
11. what all tools you used for monitoring
12. why we use alt in img tag
13. what is dns and how it works
14. how you will multiple apis in nodejs at once-> Promise.all or Promise.allSettled
15. what is Reconsiliation in React.
16. How virtual dom works
