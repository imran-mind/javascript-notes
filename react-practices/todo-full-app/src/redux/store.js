import { combineReducers, createStore } from 'redux'
import {todoReducer} from './todo-reducer'

const rootReducer = combineReducers({
    todoReducer:todoReducer
});

const store = createStore(rootReducer);

export default store;