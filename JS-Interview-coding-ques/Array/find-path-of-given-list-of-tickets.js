
// https://www.geeksforgeeks.org/find-itinerary-from-a-given-list-of-tickets/
// console.log(findNums(str))

const cityRoutes = (object) =>{
    const newObj = {};
    for(let obj in object){
        console.log(obj);
        newObj[object[obj]] = obj;
    }
    console.log('newObj ',newObj);

    let startPoint = "";
    for(let obj in object){
        if(!newObj[obj]){
            startPoint = obj;
        }
    }
    console.log("SP ",startPoint);
    let result = [];
    let newStartPoint = startPoint;
    for(let obj in object){
        const arr = [newStartPoint, object[newStartPoint]];
        newStartPoint = object[newStartPoint];
        console.log('startPoint -> ',newStartPoint)
        result.push(arr);
    }
    return result;
}


const obj ={
    "Chennai":"Banglore",
    "Bombay": "Delhi",
    "Goa": "Chennai",
    "Delhi": "Goa"
}

console.log(cityRoutes(obj));
