

const fibo = n =>{
    const f=[0,1];
    for(let i=2; i<=n; i++){
        f[i] = f[i-1]+ f[i-2];
    }
    console.log(f);
}

fibo(5)