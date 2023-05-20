
const person = {
    name: 'imran'
}

function foo(age, place){
    console.log(`Hello ${this.name} is ${age} old and lives in ${place}`);
}

foo.apply(person, [30]);
// polyfill of call func
Function.prototype.myApply = function(obj, args){
    // console.log(...args)
    obj.refFun = this;
    obj.refFun(...args);
}

foo.myApply(person, [30, 'MP']);

