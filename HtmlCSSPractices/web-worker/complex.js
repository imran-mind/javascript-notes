const complexBtn = document.getElementById('complex-btn');
const webWorker = new Worker('./worker.js');
complexBtn.addEventListener('click',(e)=>{
    webWorker.postMessage("Start worker");
    webWorker.onmessage = function(e){
        console.log(e.data);
        const data = e.data;
        document.querySelector("#output").innerHTML = data.result;
        const elements = `
            <h2>${data.first_name}  - ${data.last_name}</h2>
            <h3>${data.email}</h3>
        `;
        document.querySelector('#user').innerHTML = elements;
    }
    // let result = 0;
    // for(let i=0; i<10000000000; i++){
    //     result += i;
    // }
    // document.querySelector("#output").innerHTML = result;
});

const normalBtn= document.getElementById('normal-btn');
normalBtn.addEventListener('click',(e)=>{
    document.querySelector("#hi").innerHTML += "Hi There ! :)   "
}); 