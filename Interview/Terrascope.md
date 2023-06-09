
-------------------------------frontend-----------------------------
1. how useMemo and useCallback works
2. can we write the same thing in useEffect(()=>{},[count]), what we write in useMemo(()=>{},[count])
3. how to create custom hooks
4. how we can add a css for keyboard enter button
5. what is the diff b/w justify-content and align-items in flex?

```jsconst input = {
    "a": {
        "b": {
            "c": 1
        }
    },
    "d": {
        "e": {
            "f": {
                "g": 2
            }
        }
    },
    "h": 3,
    "x": 4
}
//output {
// 	"a.b.c": 1,
// 	"d.e.f.g": 2,
// 	"h": 3,
// 	"x": 4
// }

const flatObject = (input, parentKey='')=>{
    if(parentKey !== ''){
        parentKey = parentKey + '.';
    }
    let flatten = {};
    console.log(flatten);
    Object.keys(input).forEach((key)=>{
        if(typeof input[key] === 'object' && input[key] !== null){
        //    Object.assign(flatten, flatObject(input[key], parentKey+key));
        flatten = {...flatten, ...flatObject(input[key], parentKey+key)};
        }else{
            flatten[parentKey+key] = input[key];
        }
    });
    return flatten;
}

console.log(flatObject(input));
```
-----------------------------------------backend------------------------------------------------
1. how ec2 instance auto scal - vertical scaling and horizontal scaling
2. How mongodb scaling works
3. what is sharding
4. what is statless rest api
5. what is the pros and cons of using microservices
6. what is pros and cons using graphql over REST
7. what is rate limiting
8. how to write aggreate query in mongod
9. how to write update query and upsert query in mongo
10. explain nodejs architecture
11. 
