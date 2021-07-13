

const diffArray = (a1, a2)=>{
    const diff1 = a1.filter((item)=> !a2.includes(item));
    const diff2 = a2.filter((item)=> !a1.includes(item));;
    return [...diff1,...diff2];
}

const a = [0,6,7,1,2,3,4];
const b = [1,2,3,4,5];
const res = diffArray(a,b);
console.log(res)