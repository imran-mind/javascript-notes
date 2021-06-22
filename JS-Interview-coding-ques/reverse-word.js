

const reverseWord = (s)=>{
    const wordsReversed = [];
    s.split(" ").forEach(word=>{
        let revWrod = "";
        for(let i=word.length-1; i>=0; i--){
            revWrod = revWrod + word[i];
        }
        wordsReversed.push(revWrod);
    })
    return wordsReversed.join(" ");
}

const _reverseWord = (s)=>{
    return s.split(' ').map(word=>{
       return word.split('').reverse().join('');
    }).join(" ");
}

const __reverseWord = (s)=>{
    return s.split(' ').map(word=>{
       return word.split('').reverse().join('');
    }).reverse().join(" ");
}


// console.log(reverseWord("shaikh imran"));
console.log(_reverseWord("shaikh imran"));
console.log(__reverseWord("shaikh imran"));