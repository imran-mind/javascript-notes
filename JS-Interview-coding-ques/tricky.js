
var values = [];

for(var i=0; i<10; i++){
    values.push(function(){
        console.log(i);
    })
}

for(var j=0; j<10; j++){
    values[j]()
}
//  it will print 10 , 10 times


// there is one way to print 0-9 , IIFE
var values = [];

for(var i=0; i<10; i++){
    (function(k){
        values.push(function(){
            console.log(k);
        })
    })(i)
}

for(var j=0; j<10; j++){
    values[j]()
}


// there is one other way also to print 0-9 , let instead of var
var values = [];

for(let i=0; i<10; i++){
    (function(k){
        values.push(function(){
            console.log(k);
        })
    })(i)
}

for(var j=0; j<10; j++){
    values[j]()
}


// -------------------------------------------------------------------

var arr = [];
var myData= {};

for(let i=0; i<5; i++){
 const data = myData;
 data.message = `message_${i}`; 
 data.code = i;
 arr.push(data)
}

// We are playing with references here. After the code gets executed, we will have an array of five elements so that each element is referencing the same object.
// The final value of arr would look like:

// 0: {message: "message_4", code: 4}
// 1: {message: "message_4", code: 4}
// 2: {message: "message_4", code: 4}
// 3: {message: "message_4", code: 4}
// 4: {message: "message_4", code: 4}


// ----

setTimeout(() => {
    console.log(1);
  }, 0);
  Promise.resolve(1).then(() => {
    console.log(2);
  });
  console.log(3);

//   output 
/* 
3
2
1

*/