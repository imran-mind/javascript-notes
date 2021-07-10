


const flattenObject = (obj, parentKey = '') => {
    if (parentKey !== '')
        parentKey = parentKey + '_';

    let flattened = {};
    console.log(flattened)
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            Object.assign(flattened, flattenObject(obj[key], parentKey + key))
        } else {
            flattened[parentKey + key] = obj[key]
        }
    })
    return flattened;
}


const obj = {
    name: "test",
    address: {
        personal: "abc",
        office: {
            building: 'random',
            street: 'some street'
        }
    }
}

let flat = flattenObject(obj);
console.log(flat);

// const flatObj = {};
// let genKey;
// const objectFlatten = (obj)=>{
//     for(key in obj){
//         if(typeof obj[key] != 'object'){
//             genKey = genKey ? genKey+"_"+key : key;
//             console.log('if ',genKey)
//             flatObj[genKey] = obj[key];
//             // genKey = ''
//         }else{
//             genKey = key;
//             console.log('else ',genKey)
//             objectFlatten(obj[key]);
//         }
//     }
//     return flatObj;
// }


// const ob = objectFlatten(obj)
// console.log(ob)



/* {
    name : "test",
    address_personal: "abc"
    address_office_building: "random"
    address_office_street: "some street"
} */