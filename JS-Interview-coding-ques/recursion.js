
let counter= 0;
function foo(num){
    if(counter > num)
        return;
    console.log('Counter ',counter);
    counter++;
    foo(num);
}

// foo(5);

function Person(name,age){
    this.name = name;
    this.age = age;
    this.info = () => {
        console.log(this)
        console.log(this.name+ " => ",this.age);
    }
    // this.info = function() {
    //     console.log(this)
    //     console.log(this.name+ " => ",this.age);
    // }
}

// const Person = (name,age)=>{
//     this.name = name;
//     this.age = age;
//     this.info = function(){
//         console.log(this.name+ " => ",this.age);
//     }
// }

const p1 = new Person('imran',27);
const p2 = new Person('Amir',28);
console.log(p1 == this)
p2.info();