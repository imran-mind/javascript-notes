import React,{useState} from 'react';
import useLocalStorage from './useLocalStorage';

export default function User(){
    const [name,setName] = useLocalStorage('user','');
    console.log(' User comp ',name);
    return(
        <div className="custome-hook">
            <h1>User Hook Example</h1>
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
    )
}