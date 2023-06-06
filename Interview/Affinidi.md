Implement a Basic Queue
Write a logic for Tic-Tok-Toe Game
Create signup & signin form with api call
"------- Javascript----------
-> what is the diff b/w spread and rest operator
-> cloures
-> reduce method
-------NodeJs----------
-> what are http methods GET, POST, etc
-> what is the diff b/w PUT & Patch
-> what is the diff b/w Authentication and Authorization
-> what is middleware, and in which order middleware func gives result if we have multiple middleware to call 
-> what is req object and how we can get req.body (bodyParser)

----------DB-------------
-> what is transaction in db
-> what is indexing
-> mongo -> what is an aggregator (what are the steps)
-> mongo -> What is the limitation of document record in terms of size
-----------React-----------
-> how private routing works in react"


let s = 'a b b c d x y z A m N X y Z';
function freqChar(str){
  const charObj = {};
  const charArr = str.toLowerCase().split(' ');// ['a' , 'b'];
  return charArr.reduce((acc, ch)=>{
    acc[ch] = acc[ch] ? acc[ch]+1 : 1;
    return acc;
  },{});
}
const result = freqChar(s);
console.log('result ',result);

---------------------------------------------------------------------------------------


Promise.resolve(1)
  .then(x=> x+1)
  .then(x=> new Error('error in the'))
  .catch((err)=> console.log(err))
  .then(x=> x+1)
  .then((x)=>console.log(x+1));

------------------------------------

const c = [100,200,300,400];

const [a,b, ...d] = c;
console.log(a,b,d);
