
const person = {
    name: 'imran'
}

function foo(age, place){
    console.log(`Hello ${this.name} is ${age} old and lives in ${place}`);
}

foo.apply(person, [30, 'KA']);
// polyfill of call func
Function.prototype.myApply = function(currentContext={}, args){
    if(typeof this !== 'function'){
        throw new Error(this + ' can not be bound as it is not callable ');
    }
    currentContext.refFun = this;
    currentContext.refFun(...args);
}

foo.myApply(person, [30, 'MP']);

