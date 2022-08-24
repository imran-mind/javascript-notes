

const t1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t1 failed');
            resolve('t1 success');
        },1500);
    })
}
const t2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t2 failed');
            resolve('t2 success');
        },1000);
    })
}
const t3 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t3 failed');
            resolve('t3 success');
        },2500);
    });
}

Promise.any([t1(), t2(), t3()])
    .then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log(err);
    })

Promise.myAny = function(arr){
    return new Promise((resolve,reject)=>{
        let count = 0;
        arr.forEach((promise)=>{
            promise.then((result)=>{
                resolve(result);
            }).catch((err)=>{
                count++;
                if(count === arr.length){
                    reject(new Error('AggregateError: All promises were rejected'))
                }
            })
        })
    })
}
Promise.myAny([t1(), t2(), t3()])
    .then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log(err);
    })
