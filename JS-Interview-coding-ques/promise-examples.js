
const foo = () =>{
    return new Promise((resolve,reject)=>{
        const sum = 2+2;
        if(sum === 4)
            resolve(sum);
        else
            reject('Failed');
    })
}
const bar = (val) => {
    return new Promise((resolve,reject)=>{
        const sum = val;
        if(sum === 4)
            resolve({sum,message: 'success bar'});
        else
            reject('Failed');
    })
}

// foo().then(result=>result)
//     .bar(result).catch((err)=>{
//     console.log(err);
// });

const t1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve('t1 success');
    // },3000)
    reject('t1 err');
});
const t2 = new Promise((resolve,reject)=>{
    resolve('t2 success');
});
const t3 = new Promise((resolve,reject)=>{
    resolve('t3 success');
    // reject('t3 err');
});

// Promise.all([t1,t2,t3])
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log('err ',err);
//     })
// Promise.allSettled([t1,t2,t3])
//     .then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log('err ',err);
//     })

// foo().then(res=>{
//     return bar(res);
// }).then(bar=>{
//     console.log(bar);
// }).catch(err=>{
//     console.log(err);
// });

const getUserId = ()=>{
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/12')
            .then(data=> data.json)
            .then(res=>{
                resolve(res.userId);
            }).catch(err=>{
                reject(err);
            });
    });
}
const fetchUserById = (userId)=>{
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
            .then(data=> data.json)
            .then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            });
    });
}

getUserId()
    .then(id=>{
        return fetchUserById(id);
    }).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err);
    })

