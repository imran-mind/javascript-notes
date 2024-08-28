
Array.prototype.myFlatIte = function () {
    const stack = [...this]; //[1, 2, 3,4]
    const result = []; // [4,3,2,1];
    while (stack.length) {
        const poppedElem = stack.pop(); // 4
        if (Array.isArray(poppedElem)) {
            stack.push(...poppedElem);
        } else {
            result.push(poppedElem);
        }
    }
    return result.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]]; //-> [1,2,3,4];
console.log(arr.myFlatIte());
