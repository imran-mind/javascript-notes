
const reverse = (s) =>{
    return s.split('').reverse().join('');
}

// stack
const _reverse= (s)=>{
    const stack =[];
    for(const c of s){
        stack.push(c);
    }
    let res = "";
    const len = stack.length;
    for(let i=0;i<len; i++){
        res += stack.pop();
    }
    return res;
}

// read from last in arr;
const __reverse = (s) =>{
    let res = "";
    for(let i=s.length-1; i>=0; i--){
        res += s[i];
    }
    return res;
}

// console.log(reverse('naman'));
// console.log(_reverse('imran'));
console.log(__reverse('imran'));