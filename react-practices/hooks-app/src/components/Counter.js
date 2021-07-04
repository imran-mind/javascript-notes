import React,{useState} from 'react';

const Counter = React.memo(({number, setNumber}) =>{
    return(
        <div>
            {console.log('Counter rerendering')}
            <input value={number} type="number" onChange={(e)=>{setNumber()}} />
        </div>
    )
})

export default Counter;