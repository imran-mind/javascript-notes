

let str = "12345som23era23nd56oms786tr23ing34";

function findNums(s){
    const n = str.length;
    const validNums = new Set([1,2,3,4,5,6,7,8,9,0]);
    const set = new Set();
    for(let i=0; i<n; i++){
        const ch = parseInt(s.charAt(i));
        let st = "";
        if(validNums.has(ch)){
            st = st + ch;
            let j = i+1;
            for(let k=j; k<n; k++){
                let nextChar = parseInt(s.charAt(k));
                if(validNums.has(nextChar)){
                    st = st + nextChar;
                    j++;
                    i++;
                }else{
                    break;
                }
            }
            set.add(parseInt(st));
        }
    }
    return set;
}

console.log(findNums(str))
