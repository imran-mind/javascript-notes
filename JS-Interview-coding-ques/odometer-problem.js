
const findIfDigitExists = (thisNum, digitToFind)=>{
    while(thisNum !== 0){
        let digit = thisNum % 10;
        thisNum =  Math.floor(thisNum/10);
        if(digit === digitToFind){
            return true;
        }   
    }
    return false;
}

const odoMeter = (number,digitToFind)=>{
    let count = 0;
    for(let i=0; i<number; i++){
        let exists = findIfDigitExists(i,digitToFind);
        if(exists)
            count++;
    }
    console.log('found count -> ',count);
}

odoMeter(15,4)