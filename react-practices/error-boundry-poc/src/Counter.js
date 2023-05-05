import React, { useEffect, useState } from 'react';

export const Counter = ()=>{
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    useEffect(()=>{
        if(count === 3){
            throw new Error('3 Number reached');
        }
    },[count])
    return(
        
        <div>
            <div>{count}</div>
            <button onClick={increment}>increment</button>
        </div>
    )
}

