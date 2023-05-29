

function stringify(data) {
    if(!data)
        return null;
    //handle strings, enclose in double quotes
    if(typeof data === 'string'){
        return `"${data}"`;
    }
    //handle numbers and booleans returns the string representation
    if(typeof data === 'boolean' || typeof data === 'number'){
        return `${data}`;
    }
    //handle arrays, loop every single element
    if(Array.isArray(data)){
        let res = "[";
        for(let i=0; i<data.length; i++){
             //remove last comma;
            res = res + `${stringify(data[i])},`;
        }
        res = `${res.substring(0, res.length-1)}]`;
        return res;
    }

    //handle object, loop over keys and values
    let res = "{";
    for(let key in data){
        res = res + `"${key}": ${stringify(data[key])},`;
    }
    res = `${res.substring(0, res.length-1)}}`;
    return res;
}
const obj1 = {
    name: "imran",
    address: {
        street1: 'Johri colony',
        street2: 'Hamidpura',
        city: 'Burhanpur',
        pincode: 450331,
        state: 'MP',
        country: 'India'
    },
    phones:[8871960116, 8770252023],
}
const obj2 = {a: 'hello', b: 300, c: false};
const obj3 = {foo: [1,2,"a"], bar: {baz: true}};
const obj4 = ["hello", obj2];
const obj5 = 5;
const obj6 = "test";

console.log(stringify(obj2) ,"< ---- >", JSON.stringify(obj2));
console.log(stringify(obj3) ,"< ---- >", JSON.stringify(obj3));
console.log(stringify(obj4) ,"< ---- >", JSON.stringify(obj4));
console.log(stringify(obj5) ,"< ---- >", JSON.stringify(obj5));
console.log(stringify(obj6) ,"< ---- >", JSON.stringify(obj6));