

const matching = (magzine,notes)=>{
    let map = {};
    for(const word of magzine.split(' ')){
        map[word] = map[word] + 1 || 1;
    }
    const notesWord = notes.split(' ');
    let flag = true;
    console.log(map)
    notesWord.forEach(word => {
        if(map[word]){
            map[word]--;
            console.log(map)
            if(map[word] < 0){
                flag = false;
            }
        }else{
            flag = false;
        }
    });
    return flag;
}

const magzine = "i am looking for js jobs are you looking";
const notes = "looking i am looking";
console.log(matching(magzine,notes));