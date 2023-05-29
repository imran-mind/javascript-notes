
class Obj {
    constructor(obj){
        this.obj = new Object(obj);
    }

    indexOf(searchItem){
        for(let i=0; i<this.obj.length; i++){
            if(this.obj[i] === searchItem){
                return i;
            }
        }
        return -1;
    }
    includes(searchItem, startIndex=0){
        for(let i=startIndex; i<this.obj.length; i++){
            if(this.obj[i] === searchItem){
                return true;
            }
        }
        return false;
    }

    fill(value, start=0, end=this.obj.length-1){
        // let i = start;
        // do{
        //     this.obj[i++] = value;
        // }
        // while(i <= end)
        // return this.obj;
        for(let i= start; i<end; i++){
            this.obj[i] = value;
        }
        return this.obj;
    }

    findIndex(callback){

    }

    forEach(callback){
        for(const key in this.obj){
            this.obj[key] = callback(this.obj[key],key);
        }
        return this.obj;
    }

    map(callback){
        const obj = {};
        for(const key in this.obj){
            obj[key] = callback(this.obj[key],key);
        }
        return obj;
    }
    reduce(callback){

    }
    filter(callback){
        const obj = {};
        for(const key in this.obj){
            if(callback(this.obj[key],key)){
                obj[key] = this.obj[key];
            }
        }
        return obj;
    }

    some(){
        for(const key in this.obj){
            if(callback(this.obj[key],key)){
                return true;
            }
        }
        return false;
    }
    
    every(){
        for(const key in this.obj){
            if(callback(this.obj[key],key)){
               continue;
            }else{
                return false;
            }
        }
        return true;
    }
}
const arr = new Obj(["a","b","c"]);
// console.log(arr.indexOf('b'));
// arr.forEach((item)=>{
//     console.log(item);
// })
// const filt = arr.filter(item => typeof item == 'object');
// console.log(filt);