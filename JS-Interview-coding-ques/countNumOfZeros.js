const countZeros = (n)=>{
    let count = 0;
    while(n){
        count = count + Math.floor(n/10);
        n = Math.floor(n/10);
    }
    console.log('count-> ',count);
    return count;
}

// countZeros(90);

const countVowels = (str)=>{
    const regex = /(a|e|i|o|u)/g;
    let count = 0;
    for(let c of str){
        if(c.match(regex)){
            count++;
        }
    }
    console.log('vowel count ',count);
}

const _countVowels = (str)=>{
    const counter = str.match(/[aeiou]/gi);
    const res = counter == null ? 'not found': counter.length;
    console.log('_countVowels ',res);
}

const __countVowels = (str)=>{
    const res = Array.from(str).filter(s=> "aeiou".includes(s)).length;
    console.log('__countVowels ',res);
}


__countVowels('imran shaikh khan')
// countVowels('aeiou')

var foo = 'outside';
function logIt(){
    console.log(foo); 
    var foo = 'inside';
}
logIt();