Array.prototype.myMap = function(callback){
    const arr = [];
    for(let i=0; i<this.length; i++){
        arr.push(callback(this[i],i,this));
    }
    return arr;
}

Array.prototype.myFilter = function(callback){
    const arr = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i],i,this);
    }
}
Array.prototype.myFind = function(callback){
    for(let i=0; i<this.length; i++){
        const res = callback(this[i],i,this);
        if(res){
            return this[i];
        }
    }
    return undefined;
}

Array.prototype.myEvery = function(callback){
    for(let i=0; i<this.length; i++){
        if(!callback(this[i],i,this)){
            return false;
        }
    }
    return true;
}
Array.prototype.mySome = function(callback){
    for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
            return true;
        }
    }
    return false;
}

const a = [1,5,3];

console.log(a.mySome(i=> i%2 == 0));
// const res1 = a.map(i=>i*2);
// const res2 = a.myMap(i=>i*2);
// console.log('js map res => ',res1);
// console.log('my map res => ',res2);

// const res1 = a.filter(i=>i>1);
// const res2 = a.myFilter(i=>i>1);
// console.log('js filter res => ',res1);
// console.log('my filter res => ',res2);

// a.forEach(i=>{
//     console.log(i)
// })

// a.myForEach(i=>{
//     console.log(i)
// })
