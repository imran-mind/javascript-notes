/* 
{[]} - valid
[{(}] - invalid
*/

/* 
Algoritham by stack
-> if we see opening braces then push in to stack
-> if we see closing braces then pop from stack
    and compare
*/


const isBalancedByStack = (input)=>{
    const brackets = '[]{}()<>';
    const stack = [];
    for(let bracket of input){
        const bracketIndex = brackets.indexOf(bracket);
        if(bracketIndex % 2 === 0){
            stack.push(bracketIndex+1);
        }else{
            if(stack.pop() !== bracketIndex){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalancedByStack("{[<]}"))

const isValid = (s)=>{
    const map = {
        "[":"]",
        "{":"}",
        "(":")",
        "<":">"
    }
    const stack = [];
    for(let i=0; i<s.length; i++){
        const item = s[i];
        if(map[item]){
            stack.push(map[item]);
        }else{
            if(item !== stack.pop()){
                return false;
            }
        }
    }
    return stack.length === 0;
}
