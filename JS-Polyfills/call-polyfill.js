
const person = {
    name: 'imran'
}

function foo(age){
    console.log(`Hello ${this.name}, your age is ${age}`);
}

foo.call(person,30);

// polyfill of call func
Function.prototype.myCall = function(currentContext={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + 'It is not callable ');
    }
    currentContext.refFun = this;
    currentContext.refFun(...args);
}

foo.myCall(person,30);

