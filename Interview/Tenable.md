--------------------------- Technical Round ----------------------------------
1. what is the issue of scrolling b/w safari and chrom browser
2. what is docType in html
3. where do you define css and javascript in your html
4. const arr = [1,2,3,3,4,4];
Filter the unique values
const ans = arr.filter((value,index,self)=> self.indexOf(value) === index);
console.log(ans);
5. reverse the number

function test(num){
    if(num<0){
        const val = num+"";
        const ab = val.split('');
        const arr = ab.splice(0,1);
        ab.unshift('-');
        const ans = ab.reverse().join('')
         return parseInt("-"+ans);
    }else{
         const arr = num+"";
        return parseInt((arr.split('').reverse().join('')));
    }
}

console.log( test(123));// 321
console.log(test(-123))// -321
6. what is viewport 
7. what is event loop
8. what is flexbox and why we use it
9. what all positions we have?
10. Purpose of box sizing 
