/* 
    abc -> bca => anagram
    xyz -> yxz => anagram

    lmn -> mna => not anagram

    hello world =>world hello
*/

const charCount = (s)=>{
    const map = {};
    const s1 = s.trim().toLowerCase();
    for(const element of s1){
        map[element] = map[element] + 1 || 1;
    }
    return map;
}

const anagram = (s1,s2) =>{
    const charObj1 = charCount(s1);
    const charObj2 =  charCount(s2);
    if(Object.keys(charObj1).length !== Object.keys(charObj2).length){
        return false;
    }
    for(const ch in charObj1){
        if(charObj1[ch] !== charObj2[ch]){
            return false;
        }
    }
    return true;
}

const sort = (s)=> s.toLowerCase().split('').sort().join("");
const anagramWithSorting = (s1, s2) =>{
    return sort(s1) === sort(s2);
}

const isAnagram = (s1,s2)=>{
    if(s1.length !== s2.length)
        return false;
    const obj = charCount(s1);
    for(const c of s2){
        if(obj[c]){
            obj[c]--;
        }
    }
    const vals = Object.values(obj);
    for(let i=0; i<vals.length; i++){
        if(vals[i] !==0)
            return false;
    }
    return true;
    // console.log(obj)
}

// console.log(anagram("hello world" ,"world hello"));
// console.log(anagramWithSorting("hello world" ,"world hello"));
console.log(isAnagram("hello" ,"llhe"));



// better approach
// TC => O(n)
// SC => O(1)
const isAnagram1 = (s1,s2)=>{
    const CHAR = 256;
    const charArr = new Array(CHAR).fill(0);
    if(s1.length !== s2.length)
        return false;

    for(let i=0; i<s1.length; i++){
        charArr[s1.charCodeAt(i)]++;
        charArr[s2.charCodeAt(i)]--;
    }
    for(let i=0; i<CHAR; i++){
        if(charArr[i] !== 0)
            return false;
    }
    return true;
}

console.log(isAnagram1("silent","listen"))
