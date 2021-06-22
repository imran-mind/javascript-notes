

/* 
 imran shaikh -> Imran Shaikh
*/

const capitalize = (s) =>{
    return s.split(' ').map((word)=>{
        let str = "";
        for(let i=0; i<word.length; i++){
            if(i == 0){
                str =str + word[0].toUpperCase();
            }else{
                str =str + word[i];
            }   
        }
        return str; 
    }).join(' ')
}

const _capitalize = (s)=>{
    const words = [];
    for(let word of s.split(' ')){
        words.push(word[0].toUpperCase()+ word.slice(1));
    }
    return words.join(' ');
}


const __capitalize = (s) =>{
    let str = s[0].toUpperCase();
    for(let i=1; i<s.length; i++){
        str += s[i-1] === "" ? s[i].toUpperCase() : s[i];
    }
    return str;
}
console.log(capitalize('imran shaikh'))
console.log(_capitalize('india ki shaan'))
console.log(__capitalize('india ki shaan'))