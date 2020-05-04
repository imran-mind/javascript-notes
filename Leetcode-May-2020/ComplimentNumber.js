/*
https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/ 
 */

 /**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let result = '';
    const bin = num.toString(2);
    for(let i=0; i<bin.length; i++){
        const comp = bin[i] ^ 1;
        result += comp;
    }
    return parseInt(result,2);
};