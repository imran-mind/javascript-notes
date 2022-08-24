

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


function myPromise(arr){
    let promiseCount = 0;
    let result = [];
    return new Promise((resolve,reject) => {
        arr.forEach((promise,index)=>{
            promise.then((response)=>{
                result[index] = response;
                promiseCount = promiseCount + 1;

                //if all promsie resolved then return the result arr
                if(promiseCount === arr.length)
                    resolve(result);
            }).catch((err)=>{
                reject(err);
            })
        })
    })
}

myPromise([t1(),t2(),t3()])
    .then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });
