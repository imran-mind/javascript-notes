import { ADD_TODO, REMOVE_TODO } from "./todo-action-type"


export const addTodo = (data) =>{
    return{
        type: ADD_TODO,
        payload: data
    }
}

export const removeTodo = (data)=>{
    return {
        type: REMOVE_TODO,
        payload: data
    }
}