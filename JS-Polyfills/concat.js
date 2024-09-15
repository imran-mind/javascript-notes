
Array.prototype.myConcat = function () {
    const args = arguments;
    let arr = [...this];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            arr = [...arr, ...args[i]]
        } else {
            arr.push(args[i]);
        }
    }
    return arr;
}
const arr = [1, 2];
const arr2 = [3, [4, [5, 6]]];
const val1 = null;
const val2 = undefined;
const val3 = 'abc';
const val4 = function () { }
console.log(arr.concat(arr2, val1, val2, val3, val4))
console.log(arr.myConcat(arr2, val1, val2, val3, val4))

