
import {combineReducers} from 'redux';
import {counterReducer} from './Reducers/counter-reducer'
import { productReducer } from './Reducers/product-reducer';

export default combineReducers({
    counterReducer: counterReducer,
    productReducer: productReducer
});
