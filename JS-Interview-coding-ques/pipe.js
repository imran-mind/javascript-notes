

const getName = person => person.name;

const uppercase = string => string.toUpperCase();

const get6Chars = string => string.substring(0,6);

const reverse = string => string.split('').reverse().join('');

const normalCall = reverse(get6Chars(uppercase(getName({name: "Imran"}))));
console.log('normalCall ',normalCall)

const pipe = (...funcs) => (x) =>{
    console.log(...funcs,x)
    return funcs.reduce((v, f)=>{
        return f(v)
    },x);
}

const res = pipe(
    getName,
    uppercase,
    get6Chars,
    reverse
  )({ name: 'Imran' });

console.log('pipe result ',res)