
const person = {
    name: 'imran'
}

function foo(age, place, phone){
    console.log(phone);
    console.log(`Hello ${this.name} is ${age} old and lives in ${place}`);
}

const called = foo.bind(person, 30, 'MP');
called(987);
// polyfill of bind func
Function.prototype.myBind = function(currentContext = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + ' can not be bound as it is not callable ');
    }
    currentContext.refFun = this;
    return function(...otherArgs){
        currentContext.refFun(...args, ...otherArgs);
    }
}

const called1 = foo.myBind(person, 30, 'MP');
called1(987);
