import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css'
import { addTodo } from '../redux/todo-actions';

const Input = () =>{
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo({data:value, id:new Date().getTime()}));
        setValue('')
    }
    return(
        <div className="input_text">
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    type="text"
                    placeholder="Add ToDo..."/>
            </form>
        </div>
    )
}

export default Input;