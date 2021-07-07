import React,{useState,useCallback} from 'react';
import Counter from './Counter';

export default function UseCallbackExample(){

    const [number, setNumber] = useState(0);
    const [name,setName] = useState('');

    const increment = useCallback(() =>{
        if(number > 3){
            throw new Error('I crashed')
        }else{
            setNumber(prevNum => prevNum+1);
        }
    },[number]);

    return(
        <div style={{'margin':'20px'}}>
            <h2>Counter</h2>
            <Counter number={number} setNumber={increment}/>
            <br></br>
            <br></br>
            <br></br>
            <h2>Name</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            {console.log('rerendering')}
        </div>
    )
}