
function longestSubstrinWithSet(s){
    let max=0;
    let start=0;
    let end=0;
    let set = new Set();
    for(let i=0; i<s.length; i++){
        if(!set.has(s[i])){
            set.add(s[i]);
            end++;
        }else{
            set.delete(s[i]);
            start++;
        }
        max = Math.max(max, end - start + 1);
    }
    console.log(s)
    return s.slice(start, end+1).length;
}

console.log(longestSubstrinWithSet("abcadw"));
console.log(longestSubstrinWithSet("bbbb"));