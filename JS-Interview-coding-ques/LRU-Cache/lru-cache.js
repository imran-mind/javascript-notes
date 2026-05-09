
class LRUCache{

    constructor(limit = 10){
        this.limit = limit;
        this.map = new Map();
    }

    put(key, value){
        if(this.map.has(key)){
            // console.log(key + 'exists');
            this.map.delete(key);
        }else if(this.map.size >= this.limit){
            // console.log(this.limit + ' more than '+ this.map.size);
            const oldestKey = this.map.keys().next().value;
            this.map.delete(oldestKey);
        }
        this.map.set(key, value);
        // console.log('put: ', this.map);
    }

    get(key){
        if(this.map.has(key)){
            const value = this.map.get(key);
            this.map.delete(key)
            this.map.set(key, value);
            return value;
        }
        return null;
    }


    clear(){
        this.map.clear()
    }

    delete(key){
        this.map.delete(key);
    }

    display(){
        [...this.map.entries()].reverse().forEach((data)=>{
            console.log(data[0] +" : "+ data[1]);
        });
        console.log('-----------------------------');
    }
}
const lruCache= new LRUCache(4);
lruCache.put(1, 'a');
lruCache.put(2, 'b');
lruCache.put(3, 'c');
lruCache.put(4, 'd');
lruCache.display();
lruCache.put(5, 'e');
lruCache.display();
lruCache.use(3)
lruCache.display();
lruCache.get(2)
lruCache.display();

// const map = new Map();
// map.set(1, 'a');
// map.set(2, 'b');
// console.log(map)