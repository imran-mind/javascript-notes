
function createSetIntervalPolyfill(){
    // clouser scope
    var intervalID = 0;
    var intervalMap = {};
    function setIntervalPolyfill(callback,delay=0,...args){
        if(typeof callback !== 'function'){
            throw new Error("'callback should be a function'");
        }
        //Unique
        var id = ++intervalID;
        function repeat(){
            intervalMap[id] = setTimeout(()=>{
                callback(...args);
                // Terminating
                if(intervalMap[id]){
                    repeat();
                }
            },delay)
        }
        repeat();
        return intervalID;
    }
    function clearIntervalPolyfill(intervalID){
        console.log(intervalMap)
        clearTimeout(intervalMap[intervalID]);
        delete intervalMap[intervalID];
    }
    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}

const {setIntervalPolyfill, clearIntervalPolyfill} = createSetIntervalPolyfill();
let counter = 0;
let intervalID ;

function greeting(name){
    counter++;
    console.log("Hello ,",name);
    if(counter > 3){
        console.log('inside counter ',intervalID)
        clearIntervalPolyfill(intervalID);
    }
}

intervalID = setIntervalPolyfill(greeting,1000, "Imran");