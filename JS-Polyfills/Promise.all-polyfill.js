

const t1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('t1 success');
        },500);
    })
}
const t2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('t2 failed');
        },500);
    })
}
const t3 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('t3 success');
        },500);
    })
}
// Promise.all([t1(), t2(), t3()])
// .then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// }) 

// Promise.all 
// It will take array as input
// It will return output in an array in the same order in which we have given input array
// First failed reject will come in to catch block



Promise.myPromiseAll = function (promises) {

    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject(new Error('promises arguments must be an array'));
            return;
        }
        const result = [];
        let promiseCount = 0;
        const n = promises.length
        if (n === 0) {
            resolve(result);
            return;
        }
        promises.forEach(async (promiseFunc, index) => {
            try {
                const res = await promiseFunc;
                result[index] = res;
                promiseCount = promiseCount + 1;
                console.log(promiseCount);
                if (promiseCount === n)
                    resolve(result);
            } catch (err) {
                reject(err);
            }
        })
    })
}

Promise.myPromiseAll([t1(), t3()])
    .then(result => {
        console.log(result)
    }).catch(err => {
        console.log('Error: ', err);
    })
