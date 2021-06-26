

const reverseRecursive = (str) =>{
    if(str == ""){
        return "";
    }
    let rev =  reverseRecursive(str.substr(1));
    console.log(rev,str)
    return rev + str[0];
}

console.log(reverseRecursive('hello'));