
const firstNonRepeatChar= (str)=>{
    const map = {};
    for(const ch of str){
        map[ch] = map[ch] + 1 || 1;
    }

    for(const key in map){
        if(map[key] == 1){
            console.log(key);
            break
        }
    }
}


firstNonRepeatChar('abcdba');