
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
1. how ec2 instance auto-scale - vertical scaling and horizontal scaling
2. How MongoDB scaling works
3. what is sharding
4. what is stateless rest API
5. what are the pros and cons of using microservices
6. what are the pros and cons of using Graphql over REST
7. what is rate limiting
8. how to write an aggregate query in Mongod
9. how to write update query and upsert query in Mongo
10. explain Nodejs architecture
11. 



----14-06-2023----------------------------------------Backend--------------------------------------------
```
// Example 1:

// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


const brackedValidator = (str )=>{
    const map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const stack = []; // ['(']
    for(let i=0; i<str.length; i++){
        const brace = str[i];
        if("({[".includes(brace)){ // 3 -> O(1)
            stack.push(brace);
        }else{
            const top = stack[stack.length-1];// (
            if(top === map[brace]){
                stack.pop()// []
            }else{
                return false;
            }
        }
    }
    // TC O(n);
    // TC O(n);
    return stack.length === 0;
}
```
1. Design a Dropbox.
2. What all types of SQS queue
3. Will DB engine will use index for select * from user where name like '%%AA';
4. how you will make consistency in microservices 
    For example ticket booking app [step1, step2, step3] respective microservice is doing each steps
    How you will make consistency if any steps fail in b/w
    1. rollback 2. consistency.

5. what is the production issue you solved in the backend?
6. How write operations will happen with replicas in Mongo.
7. what all design patterns do you know
8. What is generics in TypeScript
