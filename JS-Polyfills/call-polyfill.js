
const person = {
    name: 'imran'
}

function foo(){
    console.log(`Hello ${this.name}`);
}

foo.call(person);

// polyfill of call func
Function.prototype.myCall = function(self, ...args){
    self.refFun = this;
    self.refFun(...args);
}

foo.myCall(person);

