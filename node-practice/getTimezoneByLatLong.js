// var timezoner = require('timezoner');
//     /* Request timezone with location coordinates */
//     timezoner.getTimeZone(
//         39.6034810, // Latitude coordinate
//         -119.6822510, // Longitude coordinate
//         function (err, data) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         },
//         { language: 'es', key: 'YOUR_API_KEY' }
//     );


const getTimezone = async ()=>{
    const lat = 39.6034810;
    const lng = -119.6822510;
    const location= lat + ',' + lng;
    const timestamp = Math.round((new Date()).getTime() / 1000);
    // const options = {​​​​​​​ location: lat + ',' + lng, timestamp: timestamp }​​​​​​​;
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${timestamp}`;
    
    try{
        const res = await fetch(url);
        console.log('result map => ',res);
    }catch(err){
        console.log('error map => ',err);
    }

}

getTimezone();

