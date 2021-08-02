import { ADD_TODO, REMOVE_TODO } from "./todo-action-type";
const initialeState ={
    items:[],
}

export const  todoReducer = (state=initialeState,action)=>{
    console.log(action)
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,items: [...state.items,action.payload]
            }
        
        case REMOVE_TODO:
            const todos = state.items.filter((item)=>item.id !== action.payload);
            return{
                ...state, items: todos
            }
        default:
            return state;
        
    }
}
