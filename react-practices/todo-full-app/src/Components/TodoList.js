import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/todo-actions';

const Row = ({todo}) =>{
    const dispatch = useDispatch();
    const handleDelete =  (id) =>{
        console.log(id);
        dispatch(removeTodo(id));
    }
    return (
        <tr>
            <td>{todo.data}</td>
            <td><span className="delete_btn" onClick={()=> handleDelete(todo.id)}>X</span></td>
        </tr>
    )
}

const NotFoundRow = () =>{
    return(
        <tr>
            <td className="todos_not_found">Data Note Found</td>
        </tr>
    )
}

const TableHeader = () =>{
    return(
        <tr>
            <th colSpan="2">TODOs</th>
        </tr>
    )
}
const TodoList = () =>{
    const todos = useSelector(state=>state.todoReducer);
    return(
            <table className="todo_list">
                    <TableHeader/>
                  {
                      todos.items.length ? todos.items.map((todo,i)=>{
                          return <Row todo={todo} key={todo.id} />
                      })
                      : <NotFoundRow/>
                  }
            </table>
    )
}

export default TodoList;