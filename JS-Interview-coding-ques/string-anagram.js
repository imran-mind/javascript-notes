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

// console.log(anagram("hello world" ,"world hello"));
console.log(anagramWithSorting("hello world" ,"world hello"));