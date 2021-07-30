onmessage = function(e){
    console.log(e)
    let result = 0;
    for(let i=0; i<1000000000; i++){
        result += i;
    }
    postMessage(result);
    
    fetch('https://reqres.in/api/users/2')
        .then(result=> result.json())
        .then(data=>{ 
            console.log(data.data);
            const obj = data.data;
            const d = {...obj,result: result}
            postMessage(d);
        }).catch(err=>{
            console.error(err);
        })
}