import React,{useState} from 'react';
import useLocalStorage from './useLocalStorage';

export default function CustomeHooks(){
    const [name,setName] = useLocalStorage('name','');
    console.log(' CustomeHooks comp ',name);
    return(
        <div className="custome-hook">
            <h1>Custome Hook Example</h1>
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}