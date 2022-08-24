

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
        },500);
    })
}
const t3 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // reject('t3 failed');
            resolve('t3 success');
        },500);
    });
}
// Promise.allSettled([t1(), t2(), t3()])
// .then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// Promise.all 
// It will take array as input
// It will return output in an array in the same order in which we have given input array
// First failed reject will come in to catch block


// approach 1
Promise.myPromiseAllSettled = function(arr){
    let result = [];
    let count = 0;
    return new Promise((resolve, reject)=>{
        arr.forEach((promise,index)=>{
            promise.then(response=>{
                const obj = {
                    status: 'fulfilled',
                    value: response
                }
                result[index] = obj;
                count++;
                if(count === arr.length)
                    resolve(result);
            }).catch(err=>{
                const obj = {
                    status: 'rejected',
                    value: err
                }
                count++;
                result[index] = obj;
                if(count === arr.length)
                    resolve(result);
            })
        })
    })
}

// Promise.myPromiseAllSettled([t1(),t2(),t3()])
//     .then(res=>{
//         console.log(res);
//     })


// approach-2
Promise.allSettledPolyfill = function(arr){
    console.log(arr);
    const result = arr.map((promise)=>{
        return Promise.resolve(promise).then((value)=>{
            return {
                status: 'fullfilled',
                value: value
            }
        }).catch((reason)=>{
            return {
                status: 'rejected',
                reason: reason
            }
        })
    });
    return Promise.all(result);
}

Promise.allSettledPolyfill([t1(),t2(),t3()])
    .then(res=>{
        console.log(res);
    })
