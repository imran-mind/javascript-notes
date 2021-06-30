

const deepClone = (obj) =>{
    const newObj = {};
    for(const key in obj){
        if(typeof obj[key] === 'object' && obj[key] !== null){
            newObj[key] = deepClone(obj[key]);
        }else{
            newObj[key] = obj[key];
        }
        // console.log(newObj)
    }
    return newObj;
}

var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
        workPhone : 1234509876,
        phones:{
            a:987,
            b:897
        }
	  }
	}
}

console.log(deepClone(personalDetail));