

const compression = (str)=>{
    const map = {};
    for(const ch of str){
        map[ch] = map[ch] + 1 || 1;
    }
    // console.log('map ',map);
    let s='';
    for(const c in map){
        s+=`${c}${map[c]}`;
    }
    console.log('commpression  ',s);
}
compression('aaabbbccd');