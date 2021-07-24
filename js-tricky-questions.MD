## STRING 

- Output of below code?
```js
var print=() =>{
   console.log(2); 
   setInterval(function(){console.log(5);},400);
   setTimeout(function() { console.log(3); }, 1000); 
   setTimeout(function() { console.log(4); }, 0); 
   console.log(1);
}
print();
```
output
2
1
4
5
3
5 in every 400 millisecond

- Output of below code?
```js
var a = 'jeet';
a[0] = 'k';
console.log(a)
output
jeet
Note :=> String is immutable in JS
```


- Output of below code?
```js
setTimeout(()=>{console.log("A")},1000);
setTimeout(()=>{console.log("B")},0);
Promise.resolve().then(console.log("C"));
Promise.resolve().then(setTimeout(()=>{console.log("D")},0));
console.log("E")
setTimeout(()=>{console.log("F")},1000);

output
C
E
B
D
A
F
Note :=> Promiose.resolve execute line by line  
```

- 3) Output of below code?
```js
(function (){
    var a = b = 19;;
})();
console.log(typeof a !== 'undefined'); // false;
console.log(typeof b !== 'undefined'); // true
console.log(typeof 'jeet'+"<br>") // string<br>
console.log(typeof 25 +"<br>")   // number<br>
console.log(typeof a) // "undefined"
console.log(typeof typeof a) // "string"

Note :=> typeof execute left to right , it will first execute and later it will do string concatanation or any other operation.
```

- 4) Output of below code?
```js
const obj = {
    name : "jeet",
    type: {
        name : "jeet" 
    }
}
const newObj  = {...obj};
newObj.name = "virani";
newObj.type.name = "virani";
console.log(obj.type.name);
console.log(newObj.type.name);

output
virani
virani

Note :=> when we copy obj using spread operator or Object.assign it will do 
shallow copy, It means only parent level key and value will be copied with diffrent reffrence but child level have reffrence copy. So it will point to the origin object.
```

- 5) Output of below code?
```js
"use strict";
var x = 15;
console.log(x);// 15
delete x;    
console.log(x);

Note:-> In strict mode it will give syntax error.
But if we remove strict mode but it will also give 15 as result because 
delete keyword used to delete key from object so x will not be deleting.
```

- 5) Output of below code?
```js

```

