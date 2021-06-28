
// ['r','a','m','a','n'];
const occurencesOfChar = str =>{
    const map = {};
    for(const c of str){
        map[c] = map[c] + 1 || 1;
    }
    console.log(map);
}

occurencesOfChar('raman')

