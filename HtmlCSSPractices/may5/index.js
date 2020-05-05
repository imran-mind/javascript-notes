

const createParas = () =>{
    console.time('start:')
    const testDiv = document.querySelector('.test');
    let i;
    for( i =0; i<100000; i++){
        const p = document.createElement('p');
        p.innerHTML = i + " Test "
        testDiv.appendChild(p);
    }
    console.timeEnd('start:')
}

const createParas1 = () =>{
    const fragment = document.createDocumentFragment('');
    const testDiv = document.querySelector('.test');
    console.time('start improved:')
    let i;
    for( i =0; i<10000; i++){
        const p = document.createElement('p');
        p.innerHTML = i + " Test Improved"
        fragment.appendChild(p);
    }
    testDiv.appendChild(fragment);
    console.timeEnd('start improved:')
}

// createParas();
createParas1();