
/* 
Diff b/w find and filter method
*/

let names = ["imran","shaikh","khan","engineer"];

const foundItem = names.find(item=> item === "shaikh");
console.log('foundItem => ',foundItem);


const filterItem = names.filter(item => item === "shaikh");
console.log('filterItem => ',filterItem);


//filter falsy values in array;

const data = [
    {name: "imran", age: 28},
    {name: "inam", age: 29},
    {name: "amir", age: null},
    {name: "suf", age: undefined},
    {name: null, age: undefined}
];

const filterData = data.filter(item=>  item.age != undefined);
console.log(filterData)