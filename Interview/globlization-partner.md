
## Manager Round

* what is the time when you failed.
* What all things you consider when you develop and app.
* what is the good code in your opinion.
* What is the things which you worked on who proud you.
* what are the qualities you have.

## Technical round
*  What is the diff b/w statful and statless comp
* what is state in react and diff b/w state and props
* What is error Boundary
* How to pass data from child to parent -> `EventEmitter`
* what is the diff amon call, apply and bind
* what is the diff b/w callback and promise
* what is strict mode in JS
* what all hooks React has-> `useState`,`useEffect`,`useMemo`,`useCallback`, `useReducer`, `useSelector` etc.
* Given a string s, find the length of the longest substring without repeating characters.


```javascript
function substr(str) {
    let ans = 0;
    let left = 0;
    let right = 1;
    let n = str.length;
    let shortest = str.charAt(0);
    
    while (left < n && right < n) {
        if (shortest.includes(str.charAt(right))) {
            ans = Math.max(right - left, ans);
            left = left + 1;
            right = left + 1;
        } else {
            shortest = shortest + str.charAt(right);
            right++;
        }
    }
    return shortest.length;
}

console.log(substr("abcabcbb")); // Output: 3
console.log(substr("bbbbb"));    // Output: 1
console.log(substr("pwwkew"));   // Output: 3
console.log(substr("abcadw"));   // Output: 5
