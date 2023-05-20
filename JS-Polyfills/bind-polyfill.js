
const person = {
    name: 'imran'
}

function foo(age, place){
    console.log(`Hello ${this.name} is ${age} old and lives in ${place}`);
}

const called = foo.bind(person, 30, 'MP');
called();
// polyfill of bind func
Function.prototype.myBind = function(obj){
    obj.refFun = this;
    return function(...args){
        obj.refFun(...args);
    }
}

const called1 = foo.myBind(person);
called1( 30, 'MP');
