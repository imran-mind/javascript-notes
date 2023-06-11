-------------------------------1st round--------------------------
-> difff b/w localstorage,session storage, and cookie
-> what is semantice element in html
-> what is sudo selectores in css
-> prototype
-> diff b/w deep copy and shallow copy
-> clouser
-> simple JS basics questions


-------------------------------2nd round--------------------------

-> ES6 features
-> diff b/w deep copy and shallow copy
-> what is callback function
-> what is hoisting
-> What is event loop
-> What is REST
-> what is the diff b/w POST and PUT
-> how you handle failure mechanism of microservice (by using notification system)
-> Asked the rendom num program (where i got stuck) [ arr has 4 length so if i call random() 4 times then unique element should print

let arr = ['a', 'b', 'c', 'd'];
let counter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function random() {
    let n = arr.length;
    let randomIndex = getRandomInt(n);
    console.log(arr[randomIndex])
    counter++;
}
random(); //b
random(); //c
random(); //a
random(); //d
