function sum(...args) {
    const storage = [...args]; // spread the args in storage arr;
    console.log(storage)
    if (storage.length === 4) { //base condition
        return storage.reduce((a, b) => a + b, 0);
    } else {
        const temp = function (...args2) { //create inner func
            //get the arguments of inner function
            //merge them in existing storage.
            storage.push(...args2);

            if (storage.length === 4) {
                return storage.reduce((a, b) => a + b, 0);
            } else { //return the same func again
                return temp;
            }
        }
        return temp;
    }
}

//   let curriedSum = curry(sum);

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1)(2)(3)(4)); // 10
console.log(sum(1)(2)(3)(4)); // 10