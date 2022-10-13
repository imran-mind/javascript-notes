// asked in MetaMap
function curry(...args) {
    function add(...args2) {
      return curry(...args, ...args2);
    }
    console.log(...args);
    const t = [...args].reduce((acc, curr) => acc + curr, 0);
    console.log('t ',t);
    add.value = t;
    return add;
}
  
let curryFun = curry();
const s1 = curryFun(1, 3, 2, 3, 4); //
console.log(s1);


const s2 = curryFun(1, 3)(2, 3, 4); //
console.log(s2);
const s3 = curryFun(1)(2)(3, 4);
console.log(s3);
