
import {useState,useEffect} from 'react';

function fetchSavedValues(key){
    console.log('2=>',key)
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue)
        return savedValue;
}

export default function useLocalStorage(key){
    console.log('1=>',key)
    const [value,setValue] = useState(()=>{
        return fetchSavedValues(key)
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    },[value])

    return [value,setValue];
}