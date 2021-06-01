
/* 
let names = ["imran","shaikh","mp"];
1: Add Burhanpur at the end (CREATE);
2: Tell me the o/p of the that method (READ);
3: updated shaikh to SHAIKH (UPDATE);
4: Delete mp from an array; (DELETE);
Note: DO IT BY ONLY ONE METHOD
*/

let names = ["imran","shaikh","khan","engineer"];

// 1: Add Burhanpur at the end (CREATE);
const newNames = names.splice(names.length,0, "Burhanpur");
console.log("Splice method output ",newNames);
console.log(names);

// 2: Tell me the o/p of the that method (READ);
names.splice(1,1, "SHAIKH");
console.log(names);

// 4: Delete khan from an array; (DELETE);
names.splice(2,1);
console.log(names)

