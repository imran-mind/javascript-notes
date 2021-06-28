
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

// without reverse func , solution with stack
function isPalindrom(word){
    var name = [];
    for(let i=0; i<word.length; i++){
        name.push(word[i])
    }
    console.log('name',name);
    let rword = "";
    const len = name.length;
    for(let i=0; i<len; i++){
        rword += name.pop();
    }
    console.log('rword',rword);
    return word === rword;
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'