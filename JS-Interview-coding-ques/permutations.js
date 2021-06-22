

const findPermutations = (s) =>{
    if(!s || typeof s !== 'string'){
        return 'please enter a string';
    }else if(s.length < 2){
        return s;
    }
    const permutationArr = [];
    for(let i=0; i<s.length; i++){
        let char = s[i];
        let remainingChars = s.slice(0,i) + s.slice(i+1,s.length);
        for(const permutation of findPermutations(remainingChars)){
            // console.log(permutation)
            permutationArr.push(char+permutation);
        }
    }
    return permutationArr;
}

console.log(findPermutations("ABC"));