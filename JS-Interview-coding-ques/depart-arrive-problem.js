

/* 
we have to find source and destination of trip
*/

const map ={
    tkt1:{
        departure:'Los Angeles',
        arrival: 'San Francisco'
    },
    tkt2:{
        departure:'San Francisco',
        arrival: 'New York'
    },
    tkt3:{
        departure:'Moscow',
        arrival: 'Mali'
    },
    tkt4:{
        departure:'Barcelona',
        arrival: 'Moscow'
    },
    tkt5:{
        departure:'New York',
        arrival: 'Barcelona'
    }
}


const findDepartArrival = () =>{
    const obj ={};
    for(const ticket in map){
        let depart = map[ticket].departure;
        let arrival = map[ticket].arrival;
        if(!(depart in obj)){
            obj[depart] = -1;
        }else{
            obj[depart] = obj[depart] - 1;
        }

        if(!(arrival in obj)){
            obj[arrival] = 1;
        }else{
            obj[arrival] = obj[arrival] + 1;
        }
    }
    return obj;
}

console.log(findDepartArrival());