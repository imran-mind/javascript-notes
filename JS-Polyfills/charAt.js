
String.prototype.myCharAt = function (index) {
    const str = this;
    const correctIdx = index ? index : 0;
    if (correctIdx < 0 || correctIdx > str.length) {
        return "";
    }
    return str[correctIdx];
}

const str = "hello world";

console.log(str.charAt(90));
console.log(str.myCharAt(90))
