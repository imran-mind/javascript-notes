

const t1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t1 failed');
            resolve('t1 success');
        },500);
    })
}
const t2 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t2 failed');
            resolve('t2 success');
        },300);
    })
}
const t3 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t3 failed');
            resolve('t3 success');
        },1000);
    });
}

// Promise.race([t1(), t2(), t3()])
//     .then((result)=>{
//         console.log(result)
//     }).catch((err)=>{
//         console.log('err ',err);
//     })


Promise.myRace = function(arr){
    return new Promise((resolve,reject)=>{
        arr.forEach((promise)=>{
            Promise.resolve(promise).then((result)=>{
                return resolve(result);
            }).catch((err)=>{
                return reject(err);
            })
        })
    })
}

Promise.myRace([t1(), t2(), t3()])
    .then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log('err ',err);
    })
