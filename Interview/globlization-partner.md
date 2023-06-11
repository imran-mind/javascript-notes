-----------------------------------1st Manager round------------------------------------
Managarial Round with Mateusz Borowski
1. what is the time when you failed.
2. What all things you consider when you develop and app.
3. what is the good code in your opinion.
4. What is the things which you worked on who proud you.
5. what are the qualities you have.

-----------------------------------2nd Technical round------------------------------------
1s Technical Round
-> What is the diff b/w statful and statless comp
-> what is state in react and diff b/w state and props
-> What is error Boundary
-> How to pass data from child to parent -> EventEmitter
-> what is the diff amon call, apply and bind
-> what is the diff b/w callback and promise
-> what is strict mode in JS
-> what all hooks React has-> useState,useEffect,useMemo,useCallback, useReducer, useSelector etc.
// Given a string s, find the length of the longest substring without repeating characters.
//  
// Example 1:
// Input: s = "abcabcbb"
// [a,b,c,a,b,c,b,b];
// left=0;
// right=3;
// ans = right -left; // 3
// left ++;//b
// right//c
// Output: 3  
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Example 4:
// Input: s = “abcadw”
// Output: 5
// Explanation: The answer is “bcadw”, with the length of 5.

function substr(str){ //[a,b,c,a,b,c,b,b]
    let ans = 0;
    let left=0; //left=0;
    let right=1;//3;
    let n = str.length; 
    let shortest = str.charAt(0);
   while(left < n && right < n){
    // console.log(str.charAt(left),str.charAt(right))
        if(shortest.includes(str.charAt(right))){
            ans = Math.max(right-left, ans);
            left = left + 1;
            right = left + 1;
            // break;
        }else{
            shortest = shortest + str.charAt(right);
            right++;
        }
   }
   return shortest.length;
}

console.log(substr("bbbb"));
