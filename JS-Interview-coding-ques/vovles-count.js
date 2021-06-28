
/* 
 O(n^2) 
*/
const vovelsCount = (s)=>{
    let vowelCount = 0;
    let consCount = 0;
    const vovels = "aeiou";
    const str = s.toLowerCase();
    for(const ch of str){
        if(vovels.includes(ch)){
            vowelCount++;
        }else{
            consCount++;
        }
    }
    console.log('vowelCount => ',vowelCount)
    console.log('consCount => ',consCount)
}

/* 
O(n)
*/
const _vovelsCount = (s)=>{
    let count = 0;
    const str = s.toLowerCase();
    const map = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
    }
    for(const ch of str){
        if(map[ch]){
            count++;
        }
    }
    return count;
}

const vovels = (s)=>{
    const matches = s.toLowerCase().match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vovelsCount("imran"))
console.log(_vovelsCount("imran"))
console.log(vovels("imran"))