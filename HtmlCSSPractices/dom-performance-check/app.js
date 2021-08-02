
// const container = document.getElementById('container');
// console.log(container)
// var c = document.createDocumentFragment();

// console.time("js div");
// var elems = '';
// for (var i=0; i<10000; i++) {
//     elems += `<div>div :=>${i}</div>`
//     // var e = document.createElement("div");
//     // e.className = "test-div";
//     // e.innerText = "div"+i;
//     // c.appendChild(e);
// }
// document.body.innerHTML = elems;
// console.timeEnd("js div");


console.time("js div");
var c = document.createDocumentFragment();
for (var i=0; i<10; i++) {
    var e = document.createElement("div");
    e.className = "test-div";
    e.innerText = "div "+i;
    c.appendChild(e);
}
// document.body.appendChild(c);
// console.timeEnd("js div");

console.log('start')
for(let i=0; i<5; i++){
    const a = new Promise((resolve,reject)=>{
        resolve(i);
    })
    a.then((res)=>{
        console.log('res ',res);
    })
}
console.log('end')


