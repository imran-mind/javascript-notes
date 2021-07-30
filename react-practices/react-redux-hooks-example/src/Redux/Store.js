import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { loggingMiddleware } from './LoggingMiddleware';
import rootReducer from './Reducer'

// const initialState = {
//     counter: 0
// };

// const middleware = [thunk];

// const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(rootReducer,applyMiddleware(loggingMiddleware));

export default store;